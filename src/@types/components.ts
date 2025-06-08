import { ReactElement, ReactNode } from "react";

interface carouselType {
    img: Array<imgType>;
    classNameCarousel: string;
    classNameDivImg: string;
    classNameImg: string;
    classNameBtn: string;
    classNameDivBtn: string;
}

interface imgType {
    src: string;
    alt: string;
    key: string;
    height: number;
    width: number;
}

interface mainType {
    classNameMain: string;
    classNameNavbarMain: string;
    classNameBodyMain: string;
    children1: ReactNode | ReactElement[];
    children2: ReactNode;
}


export type { carouselType, mainType };