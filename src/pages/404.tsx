import GlobalLayout from "@/layout/global";
import { NextPageWithLayout } from "@/types/props"
import Link from "next/link"

const Page: NextPageWithLayout = () => {
    return (
        <div className="flex flex-col items-center min-h-[87vh] justify-center space-y-4 px-4 text-center md:px-6">
            <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Uh oh! This page was eaten by a grue.</h1>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    {"Don't worry, you can find your way back to the light. Let me guide you."}
                </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="/"
                >
                    Back to Safety
                </Link>
            </div>
        </div>
    )
}

Page.getLayout = GlobalLayout;

export default Page;

