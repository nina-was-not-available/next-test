import {StaticImageData} from "next/image";

export type Mock = {
    value: "blue" | "pink" | "green";
    desc: string;
    image: StaticImageData;
}