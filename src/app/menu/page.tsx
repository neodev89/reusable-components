"use client"
import styles from './style.module.sass';

import { cardsType, imgType, takeCardsType } from '@/@types/components';
// import { fetchData } from '@/pages/fetches/fetch';
import { Cards } from '@/ui/cards/cards';
import { useEffect, useState } from 'react';
import { takeImagesCards } from '../../actions/takeCards';
import { insertPhotoIsUnique } from '@/actions/insertPhotIsUnique';


export const Menu = () => {
    const [data, setData] = useState<imgType[]>([]);
    const [cardText, setCardText] = useState<string>("")

    useEffect(() => {
        const fetchImages = async () => {
            const data = await takeImagesCards();
            if (data) {
                const { img } = data;
                setData(img);
            }
            return null;
        }
        fetchImages();
        console.log(cardText);
    }, [cardText]);

    const cards: cardsType = {
        classCards: styles.classCards,
        classCard: styles.classCard,
        classImg: styles.classImg,
        classDivButtons: styles.classDivButtons,
        classButtons: styles.classButtons,
        classText: styles.classText,
        img: data,
        bool: true
    };

    return (
        <div className={styles.menu}>
            <div className={styles.cardsMenu}>
                <Cards {...cards} />
                {/* <CardList {...cardsList} /> */}
            </div>
        </div>
    )
}