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
            window.location.href = '/?login=true'
        }
    })
    React.useEffect(() => {
        if (status === 'authenticated' && (session?.user?.role === 'ADMIN' || session?.user?.role === 'SUPERADMIN')) {
            window.location.href = '/admin/overview'
        }
    }
        , [status, session])
    if (status === 'loading') return <Loading />

    if (status === 'authenticated') {
        if (!session?.user?.role) {
            return <Register />
        } else if (session?.user?.role === 'STUDENT') {
            return props.children
        } else if (session?.user?.role === 'ORGANIZATION') {
            return props.children
        }
    }


    return <></>
}
