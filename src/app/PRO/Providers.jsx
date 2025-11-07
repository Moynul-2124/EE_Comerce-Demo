



"use client";

import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import store from "../(mainlayout)/REDUX/store"; // ✅ path may differ based on your folder structure

export function Providers({ children }) {
  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </SessionProvider>
  );
}
