interface ProductsType {
    classCarousel: string;
    classCarouselImg: string;
}

type dataProducts = {
    data: Array<products>;
};

interface products {
    id: string;
    src: string;
    alt: string;
}

export type {
    ProductsType,
    dataProducts,
    products
}