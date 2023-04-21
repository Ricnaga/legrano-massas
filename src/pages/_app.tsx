import { ibarra } from "@/application/theme/light";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={ibarra.className}>
      <Component {...pageProps} />
    </main>
  );
}
