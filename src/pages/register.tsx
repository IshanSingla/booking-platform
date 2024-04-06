import { Card, CardContent } from "@/components/ui/card";
import GlobalLayout from "@/layout/global";
import { NextPageWithLayout } from "@/types/global";
import { BookIcon, GlobeIcon } from "lucide-react";
import React from "react";

const Page: NextPageWithLayout = () => {
    return (
        <main className="flex items-center justify-center min-h-[87vh] p-4 ">
            <div className="grid gap-4 w-full max-w-2xl">
                <div className="space-y-2">
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                        Choose a What You Are
                    </h1>
                    <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        {"Let's find the perfect match for your."}
                    </p>
                </div>
                <Card className="bg-white">
                    <CardContent className="p-0">
                        <div className="grid gap-3 md:gap-5 sm:grid-cols-1 lg:grid-cols-2 p-4">
                            <Card className="flex items-center justify-center p-4 rounded-lg bg-gray-100/40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                                <div className="w-full flex flex-col justify-center items-center">
                                    <GlobeIcon className="w-12 h-12  aspect-square object-cover " />{" "}
                                    <div className="font-semibold">Student</div>
                                </div>
                            </Card>
                            <Card className="flex items-center justify-center p-4 rounded-lg bg-gray-100/40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800">
                                <div className="w-full flex flex-col justify-center items-center">
                                    <BookIcon className="w-12 h-12  aspect-square object-cover " />{" "}
                                    <div className="font-semibold">Orginization</div>
                                </div>
                            </Card>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
};

Page.getLayout = GlobalLayout;

export default Page;
