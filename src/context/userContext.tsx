import { Loading } from '@/components/Global'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React from 'react'

export default function UserContext(props: {
    children: React.ReactNode
}) {
    const { data: session, status } = useSession()
    const router = useRouter()
    React.useEffect(() => {
        if (status === 'authenticated') {
            if (!session.user.role) {
                router.push('/register')

            }

        }
    }
        , [status === 'authenticated'])
    if (status === 'loading') return <Loading />

    return props.children
}


export function UserRequireContext(props: {
    children: React.ReactNode
}) {
    const { data: Session, status } = useSession({
        required: true,
        onUnauthenticated() {
            window.location.href = '/'
        }
    })
    if (status === 'loading') return <Loading />

    if (status === 'authenticated') return props.children


    return <></>
}
