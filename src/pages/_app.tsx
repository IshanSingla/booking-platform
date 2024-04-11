
import { Toaster } from "@/components/ui/toaster";
import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types/props";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes"
import NextTopLoader from "nextjs-toploader";


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <SessionProvider session={pageProps.session}>
      <NextThemesProvider attribute="class" forcedTheme="light">
        <NextTopLoader
          color="#FF0000"
          showSpinner={false}
          zIndex={999}
          easing="ease"
          speed={100}
          shadow="0 0 10px #2299DD,0 0 5px #2299DD"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
        />
        {getLayout(<Component {...pageProps} />)}
        <Toaster />
      </NextThemesProvider>
    </SessionProvider>
  );
}
