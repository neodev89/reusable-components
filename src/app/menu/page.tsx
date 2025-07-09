"use client"
import styles from './style.module.sass';

import { cardsType } from '@/@types/components';
import { Cards } from '@/ui/cards/cards';


export const Menu = () => {

    
   

    return (
        <div className={styles.menu}>
            <div className={styles.cardsMenu}>
                <Cards {...menu} />
            </div>
            <div className={styles.cardsInfo}>

            </div>
        </div>
    )
}