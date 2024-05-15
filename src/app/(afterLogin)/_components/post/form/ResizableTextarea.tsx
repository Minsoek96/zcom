import { useRef, useEffect } from 'react';

import styled from 'styled-components';

type ResizableTextareaProps = {
  text: string;
  setText: (text: string) => void;
  placeholder: string;
};

function ResizableTextarea({
  text,
  setText,
  placeholder,
}: ResizableTextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const adjustHeight = () => {
      if (!textareaRef.current) return;
      const textarea = textareaRef.current;
      textarea.style.height = 'inherit';
      const newHeight = Math.min(textarea.scrollHeight, 500);
      textarea.style.height = `${newHeight}px`;
      textarea.style.overflowY = newHeight >= 500 ? 'auto' : 'hidden';
    };

    adjustHeight();
  }, [text]);

  return (
    <StyledTextarea
      ref={textareaRef}
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder={placeholder}
    />
  );
}

const StyledTextarea = styled.textarea`
  width: inherit;
  padding: 0.8em;
  border: none;
  border-radius: 4px;
  resize: none;
  max-height: 50rem;
  height: auto;
  font-size: 1.9rem;
  font-weight: ${(props) => props.theme.font.baseWeight};
  font-family: Malgun Gothic;
  background-color: ${(props) => props.theme.colors.themeColor};
  color: ${(props) => props.theme.colors.mainFont};
  &:focus {
    outline: none;
  }

  scrollbar-color: ${(props) => props.theme.colors.scrollColor};
`;

export default ResizableTextarea;
