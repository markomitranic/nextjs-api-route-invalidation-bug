"use client";

import { revalidateServerAction } from "./revalidateServerAction";

export default function RevalidateButton() {
  return (
    <button
      onClick={() => revalidateServerAction()}
    >
      Trigger Revalidate  Server Action
    </button>
  );
}