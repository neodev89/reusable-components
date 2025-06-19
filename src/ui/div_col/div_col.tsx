import { divColType } from "@/@types/components"
import Image from "next/image"

export const DivCol = ({
    classNameDivCol,
    classNameImgCol,
    classNameImg,
    height,
    width,
    src,
    alt 
}: divColType) => {
    return (
        <div className={classNameDivCol}>
            <div className={classNameImgCol}>
                <Image
                    className={classNameImg}
                    height={height}
                    width={width}
                    src={src}
                    alt={alt}
                />
            </div>
        </div>
    )
}