import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { getFormData } from "./register";
import { useSession } from "next-auth/react";

export default function DialogUpdateOrganization() {
    const { data: session } = useSession()
    const data = session?.org;
    const handleUpdate = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();
        axios
            .put(`/api/myOrg`, getFormData(e))
            .then((res) => {
                toast({
                    title: "Success",
                    description: res.data,
                    className: "bg-green-300",
                });

            })
            .catch((err) => {
                toast({
                    title: "Error",
                    description: err.message,
                    duration: 5000,
                    className: "bg-red-300",
                    action: (
                        <ToastAction
                            onClick={() => {
                                toast({
                                    title: "Api Response",
                                    description: JSON.stringify(
                                        err.response.data
                                    ),
                                });
                            }}
                            altText="Goto schedule to undo"
                        >
                            Check Response
                        </ToastAction>
                    ),
                });
            });
    };
    return (
        <Dialog>
            <DialogTrigger className="p-2 !rounded-md hover:text-gray-100 hover:bg-[#307672] border-[1px] border-solid border-black">
                Edit Profile
            </DialogTrigger>
            <DialogContent className="bg-white h-full">
                <DialogHeader>
                    <DialogTitle>Update Organization Details</DialogTitle>
                </DialogHeader>
                <form
                    onSubmit={handleUpdate} className="w-full max-w-xl h-full overflow-x-hidden">
                    <div className="flex flex-row gap-3 w-full">
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="orgName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Organization Name
                            </label>
                            <Input
                                type="text"
                                id="orgName"
                                name="orgName"
                                defaultValue={data?.orgName}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="boardName"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Board Name
                            </label>
                            <Input
                                type="text"
                                id="boardName"
                                name="boardName"
                                defaultValue={data?.boardName}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 w-full">
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="affiliationNumber"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Affiliation Number
                            </label>
                            <Input
                                type="text"
                                id="affiliationNumber"
                                name="affiliationNumber"
                                defaultValue={data?.affiliationNumber}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="pincode"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Pincode
                            </label>
                            <Input
                                type="text"
                                id="pincode"
                                name="pincode"
                                defaultValue={data?.pincode || ""}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 w-full">
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="phoneNumber"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Phone Number
                            </label>
                            <Input
                                type="text"
                                id="phoneNumber"
                                name="phoneNumber"
                                defaultValue={data?.phoneNumber || ""}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                defaultValue={data?.email || ""}
                            />
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 w-full">
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="passPercentage"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Pass Percentage
                            </label>
                            <Input
                                type="text"
                                id="passPercentage"
                                name="passPercentage"
                                defaultValue={data?.passPercentage}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="teacherStudentRatio"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Teacher Student Ratio
                            </label>
                            <Input
                                type="text"
                                id="teacherStudentRatio"
                                name="teacherStudentRatio"
                                defaultValue={data?.teacherStudentRatio}
                            />
                        </div>
                        <div className="mb-4 w-full flex gap-2 flex-row-reverse items-center justify-center">
                            <label
                                htmlFor="transportFacility"
                                className="block text-sm font-medium text-gray-700 capitalize"
                            >
                                transport facility
                            </label>
                            <Checkbox
                                id="transportFacility"
                                name="transportFacility"
                                defaultChecked={data?.transportFacility}
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="address"
                            className="block text-sm font-medium text-gray-700"
                        >
                            Address
                        </label>
                        <Input
                            type="text"
                            id="address"
                            name="address"
                            defaultValue={data?.address || ""}
                        />
                    </div>
                    <div className="flex flex-row gap-3 w-full">
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="sports"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Sports
                            </label>
                            <Checkbox
                                id="sports"
                                name="sports"
                                defaultChecked={data?.extracurricular.sports || false}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="arts"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Arts
                            </label>
                            <Checkbox id="arts" name="arts" defaultChecked={data?.extracurricular.arts || false} />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="music"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Music
                            </label>
                            <Checkbox id="music" name="music" defaultChecked={data?.extracurricular.music || false} />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="debate"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Debate
                            </label>
                            <Checkbox id="debate" name="debate" defaultChecked={data?.extracurricular.debate || false} />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="community"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Community
                            </label>
                            <Checkbox id="community" name="community" defaultChecked={data?.extracurricular.community || false} />
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 w-full">
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="smartClass"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Smart Class
                            </label>
                            <Checkbox id="smartClass" name="smartClass" defaultChecked={data?.infrastructure.smartClass || false} />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="library"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Library
                            </label>
                            <Checkbox id="library" name="library" defaultChecked={data?.infrastructure.library || false} />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="laboratories"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Laboratories
                            </label>
                            <Checkbox id="laboratories" name="laboratories" defaultChecked={data?.infrastructure.laboratories || false} />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="playground"
                                className="block text-sm font-medium text-gray-700"
                            >
                                PlayGround
                            </label>
                            <Checkbox id="playground" name="playground" defaultChecked={data?.infrastructure.playground || false} />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="computerLab"
                                className="block text-sm font-medium text-gray-700"
                            >
                                ComputerLab
                            </label>
                            <Checkbox id="computerLab" name="computerLab" defaultChecked={data?.infrastructure.computerLab || false} />
                        </div>
                    </div>
                    <div className="flex flex-row gap-3 w-full">
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="admissionFee"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Admission Fee
                            </label>
                            <Input
                                type="text"
                                id="admissionFee"
                                name="admissionFee"
                                defaultValue={data?.affordability.admissionFee}
                            />
                        </div>
                        <div className="mb-4 w-full">
                            <label
                                htmlFor="monthlyFee"
                                className="block text-sm font-medium text-gray-700"
                            >
                                Monthly Fee
                            </label>
                            <Input
                                type="text"
                                id="monthlyFee"
                                name="monthlyFee"
                                defaultValue={data?.affordability.monthlyFee}
                            />
                        </div>
                    </div>
                    <DialogFooter >
                        <DialogClose>
                            <Button variant="outline" type="submit">
                                Complete
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
