"use client";
import { carouselVidType } from "@/@types/components";
import { useState, useRef } from "react";

export const CarouselVid = ({
    vid, classNameDiv, classNameVideo,
    classNameDivBtn, classNameBtn,
}: carouselVidType) => {
    const [index, setIndex] = useState<number>(0);
    const videoRef = useRef<HTMLVideoElement>(null);

    const nextVideo = () => {
        videoRef.current?.pause();
        setIndex((prev) => (prev + 1) % vid.length)
    }

    const prevVideo = () => {
        videoRef.current?.pause();
        setIndex((prev) => (prev === 0 ? vid.length - 1 : prev - 1))
    }
    return (
        <div className={classNameDiv}>
            <video
                key={vid[index].source.src}
                height={vid[index].height}
                width={vid[index].width}
                controls={vid[index].controls}
                loop={vid[index].loop}
                className={classNameVideo}
            >
                <source src={vid[index].source.src} type={vid[index].source.type} />
            </video>
            <div className={classNameDivBtn}>
                <button type="button" className={classNameBtn} onClick={prevVideo}>&lt;</button>
                <button type="button" className={classNameBtn} onClick={nextVideo}>&gt;</button>
            </div>
        </div>
    )
}
