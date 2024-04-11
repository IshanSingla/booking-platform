import { UserRequireContext } from "@/context/userContext";
import { ReactElement } from "react";
import { Layout } from "./global";
import { CategoryProvider } from "@/context/categoryContext";

const GlobalUserRequiredLayout = (page: ReactElement) => (

    <CategoryProvider>
        <UserRequireContext>
            <Layout>{page}</Layout>
        </UserRequireContext>
    </CategoryProvider>
);

export default GlobalUserRequiredLayout;
