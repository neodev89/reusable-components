"use client";
import { carouselType } from "@/@types/components"
import Image from "next/image";
import { useState } from "react";

export const Carousel = ({
    img, classNameCarousel, classNameDivImg, classNameImg,
    classNameDivBtn, classNameBtn,
}: carouselType) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % img.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? img.length - 1 : prevIndex - 1));
    };

    return (
        <div className={classNameCarousel}>
            <div className={classNameDivImg}>
                <Image
                    className={classNameImg}
                    height={img[currentIndex].height}
                    width={img[currentIndex].width}
                    src={img[currentIndex].src}
                    alt={img[currentIndex].alt}
                />
            </div>
            <div className={classNameDivBtn}>
                <button type="button" className={classNameBtn} onClick={prevImage}>&lt;</button>
                <button type="button" className={classNameBtn} onClick={nextImage}>&gt;</button>
            </div>
        </div>
    )
}