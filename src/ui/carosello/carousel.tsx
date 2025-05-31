import { carouselType } from "@/@types/carosello"
import Image from "next/image";

export const Carousel = (props: carouselType) => {

    return (
        <div className={props.classNameCarousel}>
            <>
                {props.img.map((img) => {
                    return (
                        <Image key={img.key} height={img.height} width={img.width} src={img.src} alt={img.alt} />
                    )
                })}
            </>
        </div>
    )
}