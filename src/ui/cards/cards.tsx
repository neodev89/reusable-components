import Image from "next/image"

import { cardsType } from "@/@types/components"
import { Buttons } from "./button-cards";

const Cards = ({
    classCards, classCard, classImg, classDivButtons,
    classButtons, classText, text, img
}: cardsType) => {

    return (
        <>
            {
                img.map((image, index: number) => {
                    return (
                        <div key={`${index}`} className={classCards}>
                            <div className={classCard}>
                                <Image
                                    className={classImg}
                                    height={image.height}
                                    width={image.width}
                                    src={image.src}
                                    alt={image.alt}
                                    unoptimized
                                    priority={true}
                                />
                            </div>
                            <div className={classText}>
                                <p>{image.text}</p>
                            </div>
                            <div className={classDivButtons}>
                                <Buttons classButtons={classButtons} />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export {
    Cards,
}