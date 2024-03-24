import { Footer, Navbar } from "@/components/Global";
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

export default GlobalLayout;