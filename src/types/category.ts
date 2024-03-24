import { StaticImageData } from "next/image";

export type categoryType = {
    id: string;
    name: string;
    image: string | StaticImageData;
    description: string;
}