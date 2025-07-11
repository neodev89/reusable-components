"use client"
import styles from './style.module.sass';

import { cardsType, imgType } from '@/@types/components';
import { fetchData } from '@/pages/fetches/fetch';
import { Cards } from '@/ui/cards/cards';
import { useEffect, useState } from 'react';

export const Menu = () => {
    const [data, setData] = useState<imgType[]>([]);
    const [error, setError] = useState<Error | any>(undefined);
    const [statusRes, setStatusRes] = useState<string>("");

    useEffect(() => {
        fetchData("/api/take-cards", setError, setStatusRes, setData);
    }, []);

    const cards: cardsType = {
        classCards: styles.classCards,
        classCard: styles.classCard,
        classImg: styles.classImg,
        classDivButtons: styles.classDivButtons,
        classButtons: styles.classButtons,
        img: data
    };

    return (
        <div className={styles.menu}>
            <div className={styles.cardsMenu}>
                <Cards {...cards} />
            </div>
            <div className={styles.cardsInfo}>

            </div>
        </div>
    )
}