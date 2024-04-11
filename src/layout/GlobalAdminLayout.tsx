import AdminNavBar from "@/components/admin/AdminNavBar";
import { useSession } from "next-auth/react";
import React, { ReactElement, use, useEffect } from "react";

export function AdminLayout(props: { children: React.ReactNode }) {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            window.location.href = '/?login=true'
        },
    });
    if (status === "loading") return <></>;
    if (!(session?.user?.role === 'ADMIN' || session?.user?.role === 'SUPERADMIN')) {
        return <>UnAuthorised</>;
    }
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
