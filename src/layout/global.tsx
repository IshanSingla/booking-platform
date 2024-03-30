import { Footer, Navbar } from "@/components/Global";
import { UserRequireContext } from "@/context/userContext";
import React, { ReactElement } from "react";

export function Layout(props: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen h-full w-full ">
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
}

const GlobalLayout = (page: ReactElement) => <Layout>{page}</Layout>;
const GlobalLoginLayout = (page: ReactElement) => (
    <UserRequireContext>
        <Layout>{page}</Layout>
    </UserRequireContext>
);

export default GlobalLayout;
export { GlobalLoginLayout };
