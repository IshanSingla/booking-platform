import { Footer, Navbar } from "@/components/Global";
import React, { ReactElement } from "react";

export function Layout(props: { children: React.ReactNode }) {
    return (
        <div className="flex flex-col min-h-screen h-full w-full bg-[#f5f5f5] text-[#307672] ">
            <Navbar />
            {props.children}
            <Footer />
        </div>
    );
}

const GlobalLayout = (page: ReactElement) => <Layout>{page}</Layout>;
export default GlobalLayout;
