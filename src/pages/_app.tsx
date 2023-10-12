import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import type { AppProps } from "next/app";
import { AppProvider } from "../data/contexts/AppContext";
import { ToastContainer } from "react-toastify";
import { AuthProvider } from "../data/contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <AppProvider>
        <Component {...pageProps} />
        <ToastContainer autoClose={2000} />
      </AppProvider>
    </AuthProvider>
  );
}
