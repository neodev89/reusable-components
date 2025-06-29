import { footerTypes } from "@/@types/components"

import React from "react"
import Image from "next/image"
import styles from './style.module.sass';
import { footer } from "@/CONFIG/footer";
import Link from "next/link";

const Footer = () => {
    const { data } = footer;
    return (
        <div className={styles.classFooter}>
            <SquareFooter data={data} />
        </div>
    )
}

const SquareFooter = ({
    data
}: footerTypes) => {
    return (
        <>
            {
                data.map((prop, index: number) => {
                    return (
                        <div key={`${index}`} className={styles.classFooterContainer}>
                            <div className={styles.classInfo}>
                                <div className={styles.classFooterImg}>
                                    <Image
                                        height={60}
                                        width={60}
                                        src={prop.src}
                                        alt={`${prop.src}`}
                                        unoptimized
                                        className={styles.classImage}
                                    />
                                </div>
                                <div className={styles.classFooterVal}>
                                    <span>{prop.name}</span>
                                </div>
                                <div className={styles.classFooterVal}>
                                    <span>
                                        <Link href={prop.value}>{prop.value}</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export {
    Footer
}