import React from 'react'
import styles from './style.module.sass'

export default function LayoutAboutUs(
    { children }:
        {
            children: Readonly<React.ReactNode>
        }) {
    return (
        <div className={styles.about_us}>
            {children}
        </div>
    )
}