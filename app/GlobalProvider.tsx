"use client";

import { NextUIProvider } from "@nextui-org/react";
import { Provider } from "react-redux";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";
import { store } from "@/redux/store";

export function GlobalProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <Toaster />
      <Provider store={store}>
        <SessionProvider>{children}</SessionProvider>
      </Provider>
    </NextUIProvider>
  );
}
