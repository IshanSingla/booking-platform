import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";
import axios from "axios";
import { BookIcon, GlobeIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import React from "react";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";
import { Checkbox } from "../ui/checkbox";
import { OrganizationFormData } from "@/types/responseTypes";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { categoryContext } from "@/context/categoryContext";

export function getFormData(event: React.FormEvent): OrganizationFormData {
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const data: OrganizationFormData = {
        orgName: formData.get('orgName') as string,
        boardName: formData.get('boardName') as string,
        affiliationNumber: formData.get('affiliationNumber') as string,
        pincode: formData.get('pincode') as string,
        phoneNumber: formData.get('phoneNumber') as string,
        email: formData.get('email') as string,
        passPercentage: formData.get('passPercentage') as string,
        teacherStudentRatio: formData.get('teacherStudentRatio') as string,
        transportFacility: !!formData.get('transportFacility'), // Convert checkbox value to boolean
        address: formData.get('address') as string || '', // Handle optional field with empty string default
        sports: !!formData.get('sports'),
        arts: !!formData.get('arts'),
        music: !!formData.get('music'),
        debate: !!formData.get('debate'),
        community: !!formData.get('community'),
        smartClass: !!formData.get('smartClass'),
        library: !!formData.get('library'),
        laboratories: !!formData.get('laboratories'),
        playground: !!formData.get('playground'),
        computerLab: !!formData.get('computerLab'),
        startTime: formData.get('startTime') as string,
        endTime: formData.get('endTime') as string,
        admissionFee: formData.get('admissionFee') as string,
        monthlyFee: formData.get('monthlyFee') as string || '', // Handle optional field with empty string default
        categoryId: formData.get('category') as string,
    };

    return data;
}


export default function Register() {
    const { categories } = React.useContext(categoryContext)
    const { update } = useSession();
    const [type, setType] = React.useState<"student" | "orginization" | null>();
    const { toast } = useToast()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target: any = e.target;
        if (type === "student") {
            axios
                .put("/api/auth/register?isStudent=true", {
                    name: target?.name?.value,
                })
                .then((res) => {
                    toast({
                        title: "Completed Registration",
                        description: "You can now access the app",
                        className: "bg-green-300",
                    });
                    update();

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
                                        description: JSON.stringify(err.response.data),
                                        className: "bg-red-300",
                                    });
                                }}
                                altText="Goto schedule to undo"
                            >
                                Check Response
                            </ToastAction>
                        ),
                    });
                });
        } else if (type === "orginization") {
            console.log(getFormData(e));
            axios
                .put("/api/auth/register?isOrganization=true", getFormData(e))
                .then((res) => {
                    toast({
                        title: "Completed Registration",
                        description: "Wait for approval from admin",
                        className: "bg-green-300",
                    });
                    update();
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
                                        description: JSON.stringify(err.response.data),
                                        className: "bg-red-300",
                                    });
                                }}
                                altText="Goto schedule to undo"
                            >
                                Check Response
                            </ToastAction>
                        ),
                    });
                });
        }
    };
    return (
        <main className="flex items-center justify-center min-h-[87vh] p-4 ">
            <div className="grid gap-4 w-full max-w-2xl">
                {!type && (
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            Choose a What You Are
                        </h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            {"Let's find the perfect match for your."}
                        </p>
                    </div>
                )}
                {type && (
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            {type === "student" ? "Student" : "Orginization"} Registration
                        </h1>
                        <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            {type === "student"
                                ? "Tell us about yourself"
                                : "Tell us about your orginization"}
                        </p>
                    </div>
                )}
                <div className="flex items-center justify-center">
                    <div className="w-20 h-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
                </div>
                <Card className="bg-white">
                    <CardContent className="p-0">
                        <form
                            onSubmit={handleSubmit}
                            className={cn(
                                "md:gap-5 p-4 w-full h-full gap-3 py-3 overflow-hidden",
                                !type ? "grid sm:grid-cols-1 lg:grid-cols-2" : "flex flex-row"
                            )}
                        >
                            {!type && (
                                <>
                                    <button
                                        type="reset"
                                        id="student"
                                        onClick={() => setType("student")}
                                        className="border text-card-foreground shadow-sm w-full flex flex-col justify-center items-center p-4 rounded-lg bg-gray-100/40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                        <GlobeIcon className="w-12 h-12  aspect-square object-cover " />{" "}
                                        <div className="font-semibold">Student</div>
                                    </button>
                                    <button
                                        type="button"
                                        id="orginization"
                                        onClick={() => setType("orginization")}
                                        className="border text-card-foreground shadow-sm w-full flex flex-col justify-center items-center p-4 rounded-lg bg-gray-100/40 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800"
                                    >
                                        <BookIcon className="w-12 h-12  aspect-square object-cover " />{" "}
                                        <div className="font-semibold">Orginization</div>
                                    </button>
                                </>
                            )}
                            {type === "student" && (
                                <>
                                    <div className="w-1/3 flex flex-col justify-center items-center">
                                        <GlobeIcon className="w-12 h-12  aspect-square object-cover " />{" "}
                                        <div className="font-semibold">Student</div>
                                    </div>
                                    <div className=" gap-3 w-full flex flex-col">
                                        <Input
                                            placeholder="Enter your Name"
                                            type="text"
                                            name="name"
                                            required={true}
                                        />
                                        <Button variant="outline" type="submit">
                                            Complete
                                        </Button>
                                    </div>
                                </>
                            )}
                            {type === "orginization" && (
                                <>
                                    <div className="w-1/3 flex flex-col justify-center items-center">
                                        <GlobeIcon className="w-12 h-12  aspect-square object-cover " />{" "}
                                        <div className="font-semibold">Orginization</div>
                                    </div>
                                    <div className="w-full max-w-lg max-h-[60%] overflow-auto" id="organizationForm">
                                        <div className="flex flex-row gap-3 w-full">
                                            <div className="mb-4 w-full">
                                                <label htmlFor="orgName" className="block text-sm font-medium text-gray-700">Organization Name</label>
                                                <Input type="text" id="orgName" name="orgName" required />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="boardName" className="block text-sm font-medium text-gray-700">Board Name</label>
                                                <Input type="text" id="boardName" name="boardName" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 w-full">
                                            <div className="mb-4 w-full">
                                                <label htmlFor="affiliationNumber" className="block text-sm font-medium text-gray-700">Affiliation Number</label>
                                                <Input type="text" id="affiliationNumber" name="affiliationNumber" required />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Pincode</label>
                                                <Input type="text" id="pincode" name="pincode/" />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 w-full">
                                            <div className="mb-4 w-full">
                                                <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                                <Input type="text" id="phoneNumber" name="phoneNumber" required />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                                <Input type="email" id="email" name="email" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 w-full">
                                            <div className="mb-4 w-full">
                                                <label htmlFor="passPercentage" className="block text-sm font-medium text-gray-700">Pass Percentage</label>
                                                <Input type="text" id="passPercentage" name="passPercentage" required />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="teacherStudentRatio" className="block text-sm font-medium text-gray-700">Teacher Student Ratio</label>
                                                <Input type="text" id="teacherStudentRatio" name="teacherStudentRatio" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 w-full">
                                            <div className="mb-4 w-full">
                                                <label htmlFor="transportFacility" className="block text-sm font-medium text-gray-700">transportFacility</label>
                                                <Checkbox id="transportFacility" name="transportFacility" required />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="pincode" className="block text-sm font-medium text-gray-700">Category</label>
                                                <Select name="category" required>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select Category" />
                                                    </SelectTrigger>
                                                    <SelectContent className="bg-white">
                                                        {categories.map((category) => (
                                                            <SelectItem key={category.id} value={category.id ?? ""}>{category.name}</SelectItem>
                                                        ))}
                                                    </SelectContent>

                                                </Select>
                                            </div>
                                        </div>
                                        <div className="mb-4">
                                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
                                            <Input type="text" id="address" name="address" />
                                        </div>
                                        <div className="flex flex-row gap-3 w-full">
                                            <div className="mb-4 w-full">
                                                <label htmlFor="sports" className="block text-sm font-medium text-gray-700">Sports</label>
                                                <Checkbox id="sports" name="transportFacility" />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="arts" className="block text-sm font-medium text-gray-700">Arts</label>
                                                <Checkbox id="arts" name="arts" />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="music" className="block text-sm font-medium text-gray-700">Music</label>
                                                <Checkbox id="music" name="music" />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="debate" className="block text-sm font-medium text-gray-700">Debate</label>
                                                <Checkbox id="debate" name="debate" />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="community" className="block text-sm font-medium text-gray-700">Community</label>
                                                <Checkbox id="community" name="community" />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 w-full">
                                            <div className="mb-4 w-full">
                                                <label htmlFor="smartClass" className="block text-sm font-medium text-gray-700">Smart Class</label>
                                                <Checkbox id="smartClass" name="smartClass" />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="library" className="block text-sm font-medium text-gray-700">Library</label>
                                                <Checkbox id="library" name="library" />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="laboratories" className="block text-sm font-medium text-gray-700">Laboratories</label>
                                                <Checkbox id="laboratories" name="laboratories" />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="playground" className="block text-sm font-medium text-gray-700">PlayGround</label>
                                                <Checkbox id="playground" name="playground" />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="computerLab" className="block text-sm font-medium text-gray-700">ComputerLab</label>
                                                <Checkbox id="computerLab" name="computerLab" />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 w-full">
                                            <div className="mb-4 w-full">
                                                <label htmlFor="startTime" className="block text-sm font-medium text-gray-700">Start Time</label>
                                                <Input type="text" id="startTime" name="startTime" required />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="endTime" className="block text-sm font-medium text-gray-700">End Time</label>
                                                <Input type="text" id="endTime" name="endTime" required />
                                            </div>
                                        </div>
                                        <div className="flex flex-row gap-3 w-full">
                                            <div className="mb-4 w-full">
                                                <label htmlFor="admissionFee" className="block text-sm font-medium text-gray-700">Admission Fee</label>
                                                <Input type="text" id="admissionFee" name="admissionFee" required />
                                            </div>
                                            <div className="mb-4 w-full">
                                                <label htmlFor="monthlyFee" className="block text-sm font-medium text-gray-700">Monthly Fee</label>
                                                <Input type="text" id="monthlyFee" name="monthlyFee" />
                                            </div>
                                        </div>


                                        <Button variant="outline" type="submit">
                                            Complete
                                        </Button>
                                    </div>

                                    {/* <div className=" gap-3 w-full flex flex-col">
                                        <Input
                                            placeholder="Enter your Name"
                                            type="text"
                                            name="name"
                                            required={true}
                                        />
                                        <Button variant="outline" type="submit">
                                            Complete
                                        </Button>
                                    </div> */}
                                </>
                            )}
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
};