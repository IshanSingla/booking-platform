import { GraduationCapIcon } from "lucide-react";
import { NextPageWithLayout } from "@/types/props"
import GlobalLayout from "@/layout/global";
import Image from "next/image";
import { prisma } from "@/lib/prisma";
import Link from "next/link";
import { OrganizationSchema } from "@/types/schema";

const Page: NextPageWithLayout = (props: any) => {
    if (props.data == "null") {
        return <div className="flex flex-col items-center min-h-[87vh] justify-center space-y-4 px-4 text-center md:px-6">
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

    }
    const data: OrganizationSchema = JSON.parse(props.data);
    return (
        <main className="flex-1 min-h-[87vh]">
            <div className="bg-gray-50/70 py-12 lg:py-16">
                <div className="container px-4 md:px-6">
                    <div className="grid max-w-6xl gap-10 lg:grid-cols-3 lg:gap-20 lg:mx-auto">
                        <div className="flex items-center space-x-4 lg:col-span-2">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">{data.orgName}</h1>
                                <div className="flex items-center space-x-2">
                                    <GraduationCapIcon className="w-4 h-4" />
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Educating the leaders of tomorrow</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-6 text-center lg:grid-cols-1 lg:items-start lg:gap-4 ">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">{data.boardName} of Education</h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">Affication No: {data.affiliationNumber}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="container py-12 lg:py-16 bg-white">
                <div className="grid max-w-6xl gap-10 px-4 md:px-6 lg:grid-cols-2 lg:gap-20 lg:mx-auto">
                    <div className="space-y-4">
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Extra Curricular Activities</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            {data?.extracurricular.sports ? "Sports, " : ""}
                            {data?.extracurricular.arts ? "Arts, " : ""}
                            {data?.extracurricular.music ? "Music, " : ""}
                            {data?.extracurricular.debate ? "Debate, " : ""}
                            {data?.extracurricular.community ? "Community, " : ""}
                        </p>
                        <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">Infrastructure</h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            {data?.infrastructure.smartClass ? "Smart Class, " : ""}
                            {data?.infrastructure.library ? "Library, " : ""}
                            {data?.infrastructure.laboratories ? "Laboratories, " : ""}
                            {data?.infrastructure.playground ? "Playground, " : ""}
                            {data?.infrastructure.computerLab ? "Computer Lab, " : ""}
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

export async function getStaticProps(context: any) {
    const data = await prisma.organization.findFirst({
        where: {
            id: context.params.slug,
            isVerified: true
        },
        select: {
            id: true,
            orgName: true,
            boardName: true,
            affiliationNumber: true,
            passPercentage: true,
            teacherStudentRatio: true,
            transportFacility: true,
            address: true,
            pincode: true,
            phoneNumber: true,
            email: true,


            // createdAt: true,
            // updatedAt: true,
            extracurricular: true,
            infrastructure: true,
            timings: true,
            affordability: true,

        },
    });

    return {
        props: {
            data: JSON.stringify(data),
        },
        revalidate: 600,
    }
}

export async function getStaticPaths() {
    const data = await prisma.organization.findMany(
        {
            where: { isVerified: true },
            select: {
                id: true
            }
        });
    const paths = data.map((post: {
        id: string;
    }) => ({
        params: { slug: post.id },
    }))
    return {
        paths: paths, fallback: 'blocking'
    }
}