import { MuiProvider } from "@/application/contexts/mui";
import { ibarra } from "@/application/theme/mui";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ibarra.className}>
      <MuiProvider>
        <Component {...pageProps} />
      </MuiProvider>
    </main>
  );
}
