import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.sass";

import { takePhoto } from "@/actions/takePhoto";
import { JSX } from "react";

export const CardsPhoto: () => Promise<JSX.Element> = async () => {
    const gallery = await takePhoto();
    const dawn = gallery?.photo.albe;
    const sunset = gallery?.photo.tramonti;

    return (
        <>
            {
                dawn ? (
                    dawn.map((el, index: number) => {
                        return (
                            <div key={`${el.id}`} className={styles.classGallery}>
                                <div className={`${styles.classPhoto} ${index % 2 === 0 ? styles.classOdd : styles.classEven}`}>
                                    <Link href={el.src} prefetch={el.bool}>
                                        <Image
                                            className={styles.classImage}
                                            height={100}
                                            width={100}
                                            src={el.src}
                                            alt={el.alt}
                                            unoptimized
                                            priority={false}
                                        />
                                    </Link>
                                </div>
                                <div className={styles.classText}> 
                                    <p>{el.alt}</p>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <></>
                )
            },
            {
                sunset ? (
                    sunset.map((el, index: number) => {
                        return (
                            <div key={`${el.id}`} className={styles.classGallery}>
                                <div className={`${styles.classPhoto} ${index % 2 === 0 ? styles.classOdd : styles.classEven}`}>
                                    <Link href={el.src} prefetch={el.bool}>
                                        <Image
                                            className={styles.classImage}
                                            height={100}
                                            width={100}
                                            src={el.src}
                                            alt={el.alt}
                                            unoptimized
                                            priority={false}
                                        />
                                    </Link>
                                </div>
                                <div className={styles.classText}>
                                    <p>{el.alt}</p>
                                </div>
                            </div>
                        )
                    })
                ) : (
                    <></>
                )
            }
        </>
    )
}