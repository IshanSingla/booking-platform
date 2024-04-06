import { Loading } from '@/components/Global'
import Register from '@/components/app/register'
import { useSession } from 'next-auth/react'
import React from 'react'

export function UserRequireContext(props: {
    children: React.ReactNode
}) {
    const { data: session, status } = useSession({
        required: true,
        onUnauthenticated() {
            window.location.href = '/?error=unauthenticated'
        }
    })
    if (status === 'loading') return <Loading />

    if (status === 'authenticated') {
        if (!session?.user?.role) {
            return <Register />
        } else if (session?.user?.role === 'student') {
            return props.children
        } else if (session?.user?.role === 'organization') {
            return props.children
        }
    }


    return <></>
}
