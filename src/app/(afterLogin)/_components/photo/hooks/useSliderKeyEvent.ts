import { useEffect } from 'react';

type useSliderKeyEventProps = {
  onClick: (type: 'pre' | 'next') => void;
  isPreBlock: boolean;
  isNextBlock: boolean;
  photoid: string;
};
export default function useSliderKeyEvent({
  onClick,
  isNextBlock,
  isPreBlock,
  photoid,
}: useSliderKeyEventProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent): void => {
      if (isNextBlock && event.key === 'ArrowRight') {
        onClick('next');
      } else if (isPreBlock && event.key === 'ArrowLeft') {
        onClick('pre');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [photoid, isNextBlock, isPreBlock, onClick]);

  return null;
}
