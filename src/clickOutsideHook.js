import {useEffect} from "react";

export const useOnClickOutside = (ref, callback) => {
  const listener = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  }

  useEffect(() => {
    document.addEventListener('click', listener);

    return () => {
      document.removeEventListener('click', listener);
    }
  }, [ref, callback, listener]);
}
