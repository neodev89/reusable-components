"use client";
import { useState } from "react";
import { cardsType } from "@/@types/components"

import Image from "next/image"

const Cards = ({
    classCards, classCard, classImg, classDivButtons, 
    classButtons, img
}: cardsType) => {

    const [isLike, setIsLike] = useState(false);
    const [isDislike, setIsDislike] = useState(false);

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
                                <button
                                    type="button"
                                    name="like"
                                    className={classButtons}
                                    onClick={() => setIsLike(isLike)}
                                >
                                    <Image 
                                        height={30} 
                                        width={30} 
                                        src="/like-svg.png" 
                                        alt="like-png-button" 
                                    />
                                </button>
                                <button
                                    type="button"
                                    name="dislike"
                                    className={classButtons}
                                    onClick={() => setIsDislike(isDislike)}
                                >
                                    <Image
                                        height={30}
                                        width={30}
                                        src={"/dislike-svg.png"}
                                        alt="dislike-png-button"
                                    />
                                </button>
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