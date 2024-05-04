import { useEffect } from 'react';

import { useInView } from 'react-intersection-observer';

type useObserverProps = {
    callback: () => void;
    threshold: number;
}
export default function useObserver({ callback, threshold }:useObserverProps) {
  const { ref, inView } = useInView({
    threshold,
    delay: 0,
  });

  useEffect(() => {
    if (inView) {
      // eslint-disable-next-line no-unused-expressions
      callback();
    }
  }, [inView, callback]);

  return {
    ref,
  };
}
