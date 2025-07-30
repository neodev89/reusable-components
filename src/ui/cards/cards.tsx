import Image from "next/image";

import { cardsType } from "@/@types/components";
import { Buttons } from "./button-cards";
import Link from "next/link";

const Cards = ({
    classCards, classCard, classEven, classOdd, classImg, classDivButtons,
    classButtons, classText, img, bool
}: cardsType) => {

    return (
        <>
            {
                img.map((image, index: number) => {
                    return (
                        <div key={`${index}`} className={classCards}>
                            <div className={`${classCard} ${index % 2 === 0 ? classEven : classOdd}`}>
                                <Link href={image.href} prefetch={bool}>
                                    <Image
                                        className={classImg}
                                        height={image.height}
                                        width={image.width}
                                        src={image.src}
                                        alt={image.alt}
                                        unoptimized
                                        priority={true}
                                    />
                                </Link>
                            </div>
                            <div className={classText}>
                                <p>{image.text}</p>
                            </div>
                            <div className={classDivButtons}>
                                {
                                    image.href !== "#" ?
                                        (
                                            <Buttons href={image.href} classButtons={classButtons} child={"Mostramelo"} />
                                        ) : (
                                            <Buttons href={"#"} classButtons={classButtons} child={"Mostramelo"} />
                                        )
                                }
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