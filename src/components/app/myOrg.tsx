import { useSession } from "next-auth/react";
import React from "react";
import { Layout } from "@/layout/global";
import DialogUpdateOrganization from "./dialogUpdateOrganization";

export default function MyOrg() {
    const { data: session } = useSession();
    const data = session?.org;

    return (
        <Layout>
            <main className={`flex-1 min-h-[87vh]`}>
                <div className="bg-gray-50/70 py-12 lg:py-16">
                    <div className="container px-4 md:px-6">
                        <div className="grid max-w-6xl gap-10 lg:grid-cols-3 lg:gap-20 lg:mx-auto">
                            <div className="flex items-center space-x-4 lg:col-span-2">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl flex items-start">
                                        {data?.orgName}
                                        {data?.isVerified && (
                                            <span title="Verified" >
                                                <svg
                                                    fill="#307672"
                                                    width="28"
                                                    height="28"
                                                    viewBox="0 0 16 16"
                                                    aria-label="Verified Partner"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M12.5 3.5 8 2 3.5 3.5 2 8l1.5 4.5L8 14l4.5-1.5L14 8l-1.5-4.5ZM7 11l4.5-4.5L10 5 7 8 5.5 6.5 4 8l3 3Z"
                                                        clip-rule="evenodd"
                                                    ></path>
                                                </svg>
                                            </span>
                                        )}
                                    </h1>
                                    <h3 className="text-lg text-gray-500 dark:text-gray-400">
                                        {data?.address}, {data?.pincode}
                                    </h3>
                                    <h5 className="text-sm text-gray-500 dark:text-gray-400">
                                        {data?.email}, {data?.phoneNumber}
                                    </h5>
                                </div>
                            </div>
                            <div className="grid gap-6 lg:grid-cols-1 lg:items-start lg:gap-4 ">
                                <div className="space-y-2">
                                    <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                                        {data?.boardName} of Education
                                    </h2>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Affication No: {data?.affiliationNumber}
                                    </p>
                                    <div className="flex gap-2">
                                        {data?.isVerified ? (
                                            <div className="px-3 py-2 rounded-full bg-[#307672]/20 border border-[#307672]">
                                                Verified
                                            </div>
                                        ) : (
                                            <div className="px-3 py-2 rounded-full bg-[#f44336]/20 border border-[#f44336] text-[#f44336]">
                                                Not Verified
                                            </div>
                                        )}
                                        <DialogUpdateOrganization />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container py-8 lg:py-10 bg-white">
                    <div className="grid max-w-6xl gap-6 px-3 md:px-4 lg:grid-cols-2 lg:gap-20 lg:mx-auto">
                        <div className="space-y-4">
                            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                                Extra Curricular Activities
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                {data?.extracurricular.sports ? "Sports, " : ""}
                                {data?.extracurricular.arts ? "Arts, " : ""}
                                {data?.extracurricular.music ? "Music, " : ""}
                                {data?.extracurricular.debate ? "Debate, " : ""}
                                {data?.extracurricular.community ? "Community, " : ""}
                            </p>
                            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                                Infrastructure
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                {data?.infrastructure.smartClass ? "Smart Class, " : ""}
                                {data?.infrastructure.library ? "Library, " : ""}
                                {data?.infrastructure.laboratories ? "Laboratories, " : ""}
                                {data?.infrastructure.playground ? "Playground, " : ""}
                                {data?.infrastructure.computerLab ? "Computer Lab, " : ""}
                            </p>
                            <h2 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                                Affordability
                            </h2>
                            <p className="text-gray-500 dark:text-gray-400">
                                Admission Fee: {data?.affordability.admissionFee} <br />
                                Monthly Fee: {data?.affordability.monthlyFee}
                            </p>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                                    Transport Facility
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {" "}
                                    {data?.transportFacility ? "Available" : "Not Available"}
                                </p>
                            </div>
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                                    Teacher Student Ratio
                                </h2>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {" "}
                                    {data?.teacherStudentRatio}
                                </p>
                            </div>
                        </div>
                        <div className=" h-full w-full border flex flex-col gap-3 items-center justify-center p-2 rounded-md bg-gray-100">
                            <h1 className="text-2xl font-bold tracking-tighter sm:text-4xl">
                                Requests
                            </h1>
                            <div className="flex flex-col gap-4 w-full h-full border rounded-md bg-white"></div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
