import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { AppProvider } from "../data/context/AppContext";
import { ToastContainer } from "react-toastify";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
      <ToastContainer autoClose={2000} />
    </AppProvider>
  );
}
