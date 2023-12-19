"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Toaster />
      <SessionProvider>{children}</SessionProvider>
    </NextUIProvider>
  );
}
