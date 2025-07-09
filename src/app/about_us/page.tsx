'use client'
import { Cards } from "@/ui/cards/cards";

import styles from './style.module.sass';
import { cardsArrayType } from "@/@types/components";

export default function AboutUs() {
  const cardsObj: cardsArrayType = {
    classCards: styles.classCards,
    classCard: styles.classCard,
    classImg: styles.classImg,
    classDivButtons: styles.classDivButtons,
    classButtons: styles.classButtons,
    img: [
      {
        key: "next.svg",
        src: "/next.svg",
        alt: "next-svg",
        height: 20,
        width: 20,
      },
      {
        key: "next.svg",
        src: "/next.svg",
        alt: "next-svg",
        height: 20,
        width: 20,
      },
      {
        key: "next.svg",
        src: "/next.svg",
        alt: "next-svg",
        height: 20,
        width: 20,
      },
    ]
  }
  return (
    <>
      <div className={styles.cards}>
        <Cards {...cardsObj} />
      </div>
    </>
  );
}
