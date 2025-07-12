import { cardsType } from "@/@types/components"

import Image from "next/image"
import { Buttons } from "./button-cards";

const Cards = ({
    classCards, classCard, classImg, classDivButtons,
    classButtons, img
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