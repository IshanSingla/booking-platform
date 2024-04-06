
import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types/props";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes"


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <SessionProvider session={pageProps.session}>
      <NextThemesProvider attribute="class" forcedTheme="light">
        {getLayout(<Component {...pageProps} />)}
      </NextThemesProvider>
    </SessionProvider>
  );
}
