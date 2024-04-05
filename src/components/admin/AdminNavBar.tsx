import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import Link from 'next/link'
import { Package2Icon } from 'lucide-react'
import Image from 'next/image'

export default function AdminNavBar() {
    return (
        <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
            <nav className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                <Link className="flex items-center gap-2 text-lg font-semibold md:text-base" href="/">
                    <Package2Icon className="w-6 h-6" />
                    <span className="sr-only text-gray-500 dark:text-gray-400">LOGO</span>
                </Link>
                <Link className="text-gray-500 dark:text-gray-400" href="/admin/overview">
                    Overview
                </Link>
                <Link className="text-gray-500 dark:text-gray-400" href="/admin/users">
                    Users
                </Link>
                <Link className="text-gray-500 dark:text-gray-400" href="/admin/orginizations">
                    Organizations
                </Link>
                <Link className="text-gray-500 dark:text-gray-400" href="/admin/requests">
                    Requests
                </Link>
                <Link className="text-gray-500 dark:text-gray-400" href="/admin/categories">
                    Categories
                </Link>
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
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className="rounded-full" size="icon" variant="ghost">
                            <Image
                                alt="Avatar"
                                className="rounded-full"
                                height={32}
                                src="/placeholder.svg"
                                width={32}
                                style={{
                                    aspectRatio: "32/32",
                                    objectFit: "cover",
                                }}
                            />
                            <span className="sr-only">Toggle user menu</span>
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="bg-white">
                        <DropdownMenuLabel>LOGO</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuItem>Support</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Logout</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
