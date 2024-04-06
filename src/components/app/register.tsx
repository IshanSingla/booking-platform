import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";
import axios from "axios";
import { BookIcon, GlobeIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { useToast } from "../ui/use-toast";
import { ToastAction } from "../ui/toast";


export default function Register() {
    const { update } = useSession();
    const [type, setType] = React.useState<"student" | "orginization" | null>(
        null
    );
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
                        action: <ToastAction onClick={
                            () => {
                                toast({
                                    title: "Api Response",
                                    description: JSON.stringify(err.response.data),
                                });
                            }

                        } altText="Goto schedule to undo">Check Response</ToastAction>,
                    });
                });
        } else if (type === "orginization") {
            axios
                .put("/api/auth/register?isOrganization=true", {
                    name: target?.name?.value,
                })
                .then((res) => {
                    toast({
                        title: "Completed Registration",
                        description: "Wait for approval from admin",
                    });
                    update();
                })
                .catch((err) => {
                    toast({
                        title: "Error",
                        description: err.message,
                        duration: 5000,
                        action: <ToastAction onClick={
                            () => {
                                toast({
                                    title: "Api Response",
                                    description: JSON.stringify(err.response.data),
                                });
                            }

                        } altText="Goto schedule to undo">Check Response</ToastAction>,
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
                                "md:gap-5 p-4 w-full h-full gap-3 py-3",
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
                                            inputMode="tel"
                                            placeholder="Enter your Name"
                                            type="tel"
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
                                    <div className=" gap-3 w-full flex flex-col">
                                        <Input
                                            inputMode="tel"
                                            placeholder="Enter your Name"
                                            type="tel"
                                            name="name"
                                            required={true}
                                        />
                                        <Button variant="outline" type="submit">
                                            Complete
                                        </Button>
                                    </div>
                                </>
                            )}
                        </form>
                    </CardContent>
                </Card>
            </div>
        </main>
    );
};