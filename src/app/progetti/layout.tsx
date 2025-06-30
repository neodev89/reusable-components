import React from 'react';
import styles from './style.module.sass';

export default function LayoutProgetti(
    { children }: { children: Readonly<React.ReactNode> }
) {
    return (
        <div className={styles.layout}>
            {children}
        </div>
    )
}