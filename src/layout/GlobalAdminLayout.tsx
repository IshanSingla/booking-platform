import AdminNavBar from "@/components/admin/AdminNavBar";
import React, { ReactElement } from "react";

export function AdminLayout(props: { children: React.ReactNode }) {
    return (
        // <UserRequireContext>
            <div className="flex flex-col w-full min-h-screen">
                <AdminNavBar />
                {props.children}
            </div>
        // </UserRequireContext>
    );
}


const GlobalAdminLayout = (page: ReactElement) => (
    <AdminLayout>{page}</AdminLayout>
);

export { GlobalAdminLayout };
