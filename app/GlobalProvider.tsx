"use client";

import { NextUIProvider } from "@nextui-org/react";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}
