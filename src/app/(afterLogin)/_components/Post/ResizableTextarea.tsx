import React, { useRef, useEffect } from "react";

import styled from "styled-components";

type ResizableTextareaProps = {
  text: string;
  setText: (text: string) => void;
  placeholder: string;
};

const ResizableTextarea = ({
  text,
  setText,
  placeholder,
}: ResizableTextareaProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const adjustHeight = () => {
      if (!textareaRef.current) return;
      const textarea = textareaRef.current;
      textarea.style.height = "inherit";
      const newHeight = Math.min(textarea.scrollHeight, 500);
      textarea.style.height = `${newHeight}px`;
      textarea.style.overflowY = newHeight >= 500 ? "auto" : "hidden";
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
};

const StyledTextarea = styled.textarea`
  width: inherit;
  padding: 12px;
  border: none;
  border-radius: 4px;
  resize: none;
  max-height: 500px;
  height: auto;
  font-size: 19px;
  font-family: Malgun Gothic;
  &:focus {
    outline: none;
  }
`;

export default ResizableTextarea;
