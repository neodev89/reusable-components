'use client'
import styles from './style.module.sass';

import { Cards } from "@/ui/cards/cards";
import { cardsType } from "@/@types/components";
import { images } from "@/ui/cards/images";

export default function AboutUs() {
  const cardsObj: cardsType = {
    classCards: styles.classCards,
    classCard: styles.classCard,
    classImg: styles.classImg,
    classDivButtons: styles.classDivButtons,
    classButtons: styles.classButtons,
    img: images
  }
  return (
    <>
      <div className={styles.cards}>
        <Cards {...cardsObj} />
      </div>
    </>
  );
}
