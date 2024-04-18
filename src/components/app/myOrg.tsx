import { useSession } from 'next-auth/react';
import React from 'react'

export default function MyOrg() {
    const { data: session, status } = useSession();
    console.log(session)
    return (
        <div>{`${session?.org}`}</div>
    )
}
