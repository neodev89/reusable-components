type photoType = {
    photo: galleryType;
}

interface galleryType {
    tramonti: Array<gallery>;
    albe: Array<gallery>;
}

interface gallery {
    id: string;
    alt: string;
    src: string;
    bool: boolean;
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