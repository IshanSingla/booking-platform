import { Footer, Navbar } from "@/components/Global";
import { UserRequireContext } from "@/context/userContext";
import React, { ReactElement } from "react";

export function Layout(props: { children: React.ReactNode }) {
    return (
        <main className="gradient">
            <Navbar />
            {props.children}
            <Footer />
        </main>
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
