import { ComponentType, ReactNode } from "react";

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
    children1: ReactNode;
    children2: ReactNode;
}

interface bodyMainType {
    classNameBodyMain: string;
    state: string;
    text: Array<{ id: string, page: ReactNode }>;
}

interface divColType {
    classNameDivCol: string;
    classNameImgCol: string;
    classNameTriangle: string;
    Triangle: ComponentType<{ className: string }>;
}

interface squareFooterType {
    classDivPropertyFooter: string;
    classNamePropertyFooter: string;
    classValuePropertyFooter: string;
    properties: Array<{ name: string, value: string }>;
}


export type { carouselType, mainType, bodyMainType, divColType, squareFooterType };