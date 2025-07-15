'use client'
import styles from './style.module.sass';

import { Cards } from "@/ui/cards/cards";
import { cardsType } from "@/@types/components";
import { images } from "@/ui/cards/images";

export default function AboutUs() {

  const cardsObj: cardsType = {
    classCards: styles.classCards,
    classCard: styles.classCard,
    classEven: styles.classEven,
    classOdd: styles.classOdd,
    classImg: styles.classImg,
    classDivButtons: styles.classDivButtons,
    classButtons: styles.classButtons,
    classText: styles.classText,
    bool: true,
    img: images,
  };

  // const listCards: takeCardsType = {
  //   classCards: styles.classCards,
  //   classCard: styles.classCard,
  //   classEven: styles.classEven,
  //   classOdd: styles.classOdd,
  //   classImg: styles.classImg,
  //   classDivButtons: styles.classDivButtons,
  //   classButtons: styles.classButtons,
  //   classText: styles.classText,
  //   bool: true,
  // };

  return (
    <div className={styles.about_us}>
      <div className={styles.cards}>
        <Cards {...cardsObj} />
      </div>
    </div>
  );
}
