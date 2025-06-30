"use client";
import { useState } from "react";
import { cardsType } from "@/@types/components"

import Image from "next/image"

const Cards = ({
    classCards,
    classCard,
    classImg,
    img,
    classDivButtons,
    classButtons,
}: cardsType) => {
    const [isLike, setIsLike] = useState(null);



    return (
        <div className={classCards}>
            <div className={classCard}>
                <Image className={classImg} height={img.height} width={img.width} src={img.src} alt={img.alt} />
            </div>
            <div className={classDivButtons}>
                <button
                    type="button"
                    name="like"
                    className={classButtons}
                    onClick={prevImg}
                ></button>
                <button
                    type="button"
                    name="dislike"
                    className={classButtons}
                    onClick={nextImg}
                ></button>
            </div>
        </div>
    )
}