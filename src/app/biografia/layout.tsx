import React from 'react'
import styles from './style.module.sass'

export default function LayoutBiografia(
    { children }:
        {
            children: Readonly<React.ReactNode>
        }) {
    return (
        <div className={styles.biografia}>
            {children}
        </div>
    )
}