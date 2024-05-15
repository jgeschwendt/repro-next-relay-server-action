"use client";

import { setValue } from "./actions";
import { useCallback } from "react";

export function Interactive({
  serverState,
}: {
  serverState: string;
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
