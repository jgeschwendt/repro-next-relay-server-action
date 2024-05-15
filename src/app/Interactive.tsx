"use client";

import { useCallback } from "react";

export function Interactive({
  serverState,
  setValue,
}: {
  serverState: string;
  setValue: (value: string) => void;
}): JSX.Element {
  const onClick = useCallback(() => {
    setValue(String(Math.random()));
  }, []);

  return (
    <>
      <pre>VALUE: {serverState}</pre>
      <button type="button" onClick={onClick}>
        Update
      </button>
    </>
  );
}
