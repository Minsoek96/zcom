import { useEffect, useState } from 'react';

type DebounceProps<T> = {
  value: T;
  delay?: number;
};
export default function useDeBounce<T>({ value, delay }: DebounceProps<T>): T {
  const [debounceValue, setDebounceValue] = useState<T>(value);
  useEffect(() => {
    const time = setTimeout(() => {
      setDebounceValue(value);
    }, delay || 500);

    return () => {
      clearTimeout(time);
    };
  }, [value, delay]);

  return debounceValue;
}
