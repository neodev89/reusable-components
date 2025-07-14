import Image from "next/image";
import Link from "next/link";

import { cardsType } from "@/@types/components";
import { Buttons } from "./button-cards";

const Cards = ({
    classCards, classCard, classEven, classOdd, classImg, classDivButtons,
    classButtons, classText, img, bool, href
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
                                    href ?
                                        (href.map((el) => {
                                            if (el.id === image.alt) {
                                                return (
                                                    <Buttons key={el.id} href={el.src} classButtons={classButtons} />
                                                )
                                            }
                                        })) : (
                                            <Buttons href={"#"} classButtons={classButtons} />
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