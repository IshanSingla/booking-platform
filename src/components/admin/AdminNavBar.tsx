import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { AlignJustify, Package2Icon } from 'lucide-react'
import Login from '../Global/login'
import { cn } from '@/lib/cn'
import { useRouter } from 'next/router'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '../ui/sheet'

export default function AdminNavBar() {
    const router = useRouter()
    const data = [
        {
            label: 'Overview',
            href: '/admin/overview'
        },
        {
            label: 'Users',
            href: '/admin/users'
        },
        {
            label: 'Organizations',
            href: '/admin/orginizations'
        },
        {
            label: 'Requests',
            href: '/admin/requests'
        },
        {
            label: 'Categories',
            href: '/admin/categories'
        },
    ]
    return (
        <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
            <Sheet >
                <SheetTrigger asChild>
                    <Button variant="outline" className="md:hidden">
                        <AlignJustify className='h-6 w-6' />
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className='bg-white !w-[50%]'>
                    <SheetTitle className='h-20 text-center'>
                        Admin Panel
                    </SheetTitle>
                    <nav className="flex flex-col gap-6 text-lg font-medium md:hidden mx-auto">
                        {
                            data.map((item, index) => (
                                <SheetClose asChild key={index} className={cn("text-gray-500 dark:text-gray-400 w-full border rounded-lg p-3 shadow-lg", router.pathname.includes(item.href) ? "text-bold text-lg p-4 shadow-xl" : "")}>
                                    <Link href={item.href}>
                                        {item.label}
                                    </Link>
                                </SheetClose>
                            ))
                        }
                    </nav>
                </SheetContent>


            </Sheet>
            <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="/">
                    <Package2Icon className="w-6 h-6" />
                    <span className="sr-only text-gray-500 dark:text-gray-400">LOGO</span>
                </Link>
                {
                    data.map((item, index) => (
                        <Link key={index} href={item.href} className={cn("text-gray-500 dark:text-gray-400", router.pathname.includes(item.href) ? "text-bold text-lg" : "")}>
                            {item.label}
                        </Link>
                    ))
                }
            </nav>
            <div className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4">
                <form className="flex-1 ml-auto sm:flex-initial">
                    {/* <div className="relative">
                        <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                        <Input
                            className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                            placeholder="Search users..."
                            type="search"
                        />
                    </div> */}
                </form>
                <Login />
            </div>
        </header>
    )
}
