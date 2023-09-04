"use client";

import { Provider } from "react-redux";
import store from "@/store";
import { Toaster } from "react-hot-toast";

export default function ReduxProvider({ children }) {
  return(
    <Provider store={store}>
        <Toaster position="top-center" reverseOrder={false}/>
        {children}
    </Provider>
  );
}