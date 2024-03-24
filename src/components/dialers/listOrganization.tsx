import React from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

import Image from "next/image";
import category1 from "@/assets/category1.png";
import { categoryType } from "@/types/category";

let arr: categoryType[] = [
    {
        id: "88",
        image: category1,
        name: "hello",
        description: "bla bla bla",
    },
    {
        id: "89",
        image: category1,
        name: "hello",
        description: "bla bla bla",
    },
    {
        id: "89",
        image: category1,
        name: "hello",
        description: "bla bla bla",
    },
    {
        id: "89",
        image: category1,
        name: "hello",
        description: "bla bla bla",
    },
    {
        id: "89",
        image: category1,
        name: "hello",
        description: "bla bla bla",
    },
];

export default function ListOrganization(props: { data: categoryType }) {
    return (
        <Dialog>
            <DialogTrigger className="w-full h-full shadow-xl rounded-xl">
                <div
                    className={`w-full flex justify-start items-center gap-4 border border-gray-300 rounded-xl`}
                    key={props.data.id}
                >
                    <div className="w-1/4 h-full rounded-l-xl">
                        <Image
                            className="w-full rounded-l-xl"
                            width={100}
                            height={100}
                            src={props.data.image}
                            alt="Category Image"
                        />
                    </div>
                    <div className="">
                        <h4 className="text-2xl font-bold capitalize">
                            {props.data.name}
                        </h4>
                        <p className="text-sm text-gray-500">
                            {props.data.description}
                        </p>
                    </div>
                </div>
            </DialogTrigger>
            <DialogContent className="w-full h-full bg-white overflow-auto !rounded-xl no-scrollbar">
                <DialogHeader>
                    <DialogTitle>
                        All Organizations of{" "}
                        <span className="font-bold capitalize">
                            {props.data.name}
                        </span>{" "}
                        Category
                    </DialogTitle>
                </DialogHeader>
                {arr.map((data, index) => {
                    return (
                        <div
                            className={`w-full flex justify-start items-center gap-4 border border-gray-300 rounded-xl`}
                            key={index}
                        >
                            <div className="w-1/4 h-full rounded-l-xl">
                                <Image
                                    className="w-full rounded-l-xl"
                                    width={100}
                                    height={100}
                                    src={data.image}
                                    alt="Category Image"
                                />
                            </div>
                            <div className="">
                                <h4 className="text-2xl font-bold capitalize">
                                    {data.name}
                                </h4>
                                <p className="text-sm text-gray-500">
                                    {data.description}
                                </p>
                            </div>
                        </div>
                    );
                })}
            </DialogContent>
        </Dialog>
    );
}
