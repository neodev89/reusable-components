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
    
}


export type { carouselType };