import { Loading } from '@/components/Global'
import { useSession } from 'next-auth/react'
import React from 'react'

export default function UserContext(props: {
    children: React.ReactNode
}) {
    const { data: Session, status } = useSession()
    if (status === 'loading') return <Loading />

    return props.children
}
