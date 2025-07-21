import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.sass";

import { takePhoto } from "@/actions/takePhoto";
import { JSX } from "react";
import { initialGallery } from "@/content/photograph/initialState";

export const CardsPhoto: () => Promise<JSX.Element> = async () => {
    const gallery = await takePhoto();
    const dawn = gallery ? gallery.photo.dawn : initialGallery.photo.dawn;
    const sunset = gallery ? gallery.photo.sunset : initialGallery.photo.sunset;

    return (
        <>
            {
                dawn.map((el, index: number) => {
                    console.log("ID dawn", el.origin_id)
                    return (
                        <div key={`${el.origin_id}`} className={styles.classGallery}>
                            <div className={`${styles.classPhoto} ${index % 2 === 0 ? styles.classOdd : styles.classEven}`}>
                                <Link href={el.image_src} prefetch={el.bool}>
                                    <Image
                                        className={styles.classImage}
                                        height={100}
                                        width={100}
                                        src={el.image_src}
                                        alt={el.image_alt}
                                        unoptimized
                                        priority={false}
                                    />
                                </Link>
                            </div>
                            <div className={styles.classText}>
                                <p>{el.image_alt}</p>
                            </div>
                        </div>
                    )
                })
            },
            {
                sunset.map((el, index: number) => {
                    console.log("ID sunset", el.origin_id)
                    return (
                        <div key={`${el.origin_id}`} className={styles.classGallery}>
                            <div className={`${styles.classPhoto} ${index % 2 === 0 ? styles.classOdd : styles.classEven}`}>
                                <Link href={el.image_src} prefetch={el.bool}>
                                    <Image
                                        className={styles.classImage}
                                        height={100}
                                        width={100}
                                        src={el.image_src}
                                        alt={el.image_alt}
                                        unoptimized
                                        priority={false}
                                    />
                                </Link>
                            </div>
                            <div className={styles.classText}>
                                <p>{el.image_alt}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}