import UserContext from "@/context/userContext";
import "@/styles/globals.css";
import { AppPropsWithLayout } from "@/types/global";
import { SessionProvider } from "next-auth/react";


export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (

    <SessionProvider >
      <UserContext>
        {getLayout(<Component {...pageProps} />)}
      </UserContext>
    </SessionProvider>

  );
}
