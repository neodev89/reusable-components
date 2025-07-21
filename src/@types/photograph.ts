type photoType = {
    photo: galleryType;
}

interface galleryType {
    sunset: Array<gallery>;
    dawn: Array<gallery>;
}

interface gallery {
    origin_id: string;
    id: string;
    title: string;
    description: string;
    image_alt: string;
    image_src: string;
    category: string;
    date_up: string;
    visible: boolean;
    bool: boolean;
    tags: Array<string>;
}

interface galleryImageType {
    image: galleryType;
    classGallery: string;
    classPhoto: string;
    classEven: string;
    classOdd: string;
    classImage: string;
    classText: string;
}

export type {
    photoType,
    galleryType,
    gallery,
    galleryImageType
}