import React from "react";

import { Metadata } from "next";
import styles from './style.module.sass';

export const metadata: Metadata = {
    title: "Web site for bar company",
    description: "complete web site to show to customers a few services and products"
}

export default function LayoutBar(
    { children } : { children: Readonly<React.ReactNode> }
) {
    return (
        <div className={styles.classDiv}>
            {children}
        </div>
    )
}