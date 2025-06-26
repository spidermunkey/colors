import { useRef, useCallback } from "react";

export const useDebouncer = (invoke, delay = 400) => {
  let timeoutID = useRef(null);
  return useCallback((...args) => {
    clearTimeout(timeoutID.current);
    timeoutID.current = setTimeout(() => invoke(...args),delay)
  },[invoke,delay])
}
