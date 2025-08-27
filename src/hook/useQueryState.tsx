import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useQueryState<T extends string>(
  key: string,
  defaultValue: T
): [T, (value: T) => void] {
  const [searchParams, setSearchParams] = useSearchParams();
  const [state, setState] = useState<T>(() => {
    const initial = searchParams.get(key);
    return (initial as T) || defaultValue;
  });

  const setQueryState = useCallback(
    (value: T) => {
      if (value === state) return;

      setState(value);

      const newParams = new URLSearchParams(searchParams);

      if (value === defaultValue) {
        newParams.delete(key);
      } else {
        newParams.set(key, value);
      }

      setSearchParams(newParams, { replace: true });
    },
    [state, key, defaultValue, searchParams, setSearchParams]
  );

  useEffect(() => {
    const newValue = searchParams.get(key) as T | undefined;
    if (!newValue && state !== defaultValue) {
      setState(defaultValue);
    } else if (newValue && newValue !== state) {
      setState(newValue);
    }
  }, [searchParams, key, state, defaultValue]);

  return [state, setQueryState];
}
