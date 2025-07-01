"use client";
import { useState } from "react";
import { cardsArrayType, cardsType } from "@/@types/components"

import Image from "next/image"

const Cards = ({
    cards
}: cardsArrayType) => {

    const [isLike, setIsLike] = useState(false);
    const [isDislike, setIsDislike] = useState(false);

    return (
        <>
            {
                cards.map((card, index: number) => {
                    return (
                        <div key={`${index}`} className={card.classCards}>
                            <div className={card.classCard}>
                                <Image 
                                    className={card.classImg} 
                                    height={card.img.height} 
                                    width={card.img.width} 
                                    src={card.img.src} 
                                    alt={card.img.alt} 
                                />
                            </div>
                            <div className={card.classDivButtons}>
                                <button
                                    type="button"
                                    name="like"
                                    className={card.classButtons}
                                    onClick={() => setIsLike(isLike)}
                                >
                                    <Image 
                                        height={30} 
                                        width={30} 
                                        src="/like.jpeg" 
                                        alt="like-button" 
                                    />
                                </button>
                                <button
                                    type="button"
                                    name="dislike"
                                    className={card.classButtons}
                                    onClick={() => setIsDislike(isDislike)}
                                ></button>
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