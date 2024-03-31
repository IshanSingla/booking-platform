import { GraduationCapIcon } from "lucide-react";
import { NextPageWithLayout } from "@/types/global"
import GlobalLayout from "@/layout/global";
import Image from "next/image";

const Page: NextPageWithLayout = () => {
    return (
        <main className="flex-1 min-h-[87vh]">
            <div className="bg-gray-50/70 py-12 lg:py-16">
                <div className="container px-4 md:px-6">
                    <div className="grid max-w-6xl gap-10 lg:grid-cols-3 lg:gap-20 lg:mx-auto">
                        <div className="flex items-center space-x-4 lg:col-span-2">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{"St. Mary's School"}</h1>
                                <div className="flex items-center space-x-2">
                                    <GraduationCapIcon className="w-4 h-4" />
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Educating the leaders of tomorrow</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-6 text-center lg:grid-cols-1 lg:items-start lg:gap-4">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">ABC Board of Education</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Providing quality education since 1990</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Transport Facilities</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Buses available for all major routes</p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Complete Address</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">1234 Elm Street, Springfield, IL, 62701</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-12 lg:py-16">
                <div className="grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20 lg:mx-auto">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Playground Availability</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            The school has a well-equipped playground with facilities for various sports.
                        </p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Representative Student</h2>
                        <div className="flex items-center space-x-2">
                            <Image
                                alt="Student"
                                className="rounded-full"
                                height={100}
                                src="/placeholder.svg"
                                width={100}
                                style={
                                    {
                                        aspectRatio: "100/100",
                                        objectFit: "cover",
                                    }
                                }
                            />
                            <p className="text-base font-medium">Sophia Johnson</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

Page.getLayout = GlobalLayout;

export default Page;