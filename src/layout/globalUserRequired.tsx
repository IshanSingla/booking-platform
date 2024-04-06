import { UserRequireContext } from "@/context/userContext";
import { ReactElement } from "react";
import { Layout } from "./global";

const GlobalUserRequiredLayout = (page: ReactElement) => (
    <UserRequireContext>
        <Layout>{page}</Layout>
    </UserRequireContext>
);

export default GlobalUserRequiredLayout;
