import React from 'react';
import styles from './style.module.sass';

export default function LayoutHomepage(
    { children } : { children: Readonly<React.ReactNode> }
) {
    return (
        <div className={styles.homepage}>
            {children}
        </div>
    )
}