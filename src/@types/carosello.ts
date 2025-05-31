interface carouselType {
    id: string;
    img: Array<imgType>;
    classNameCarousel: string;
    classNameDivImg: string;
    classNameImg: string;
}

interface imgType {
    src: string;
    alt: string;
    key: string;
    height: number;
    width: number;
}


export type { carouselType };