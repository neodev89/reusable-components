'use client'
import { Cards } from "@/ui/cards/cards";

import styles from './style.module.sass';
import LayoutAboutUs from "./layout";
import { cardsArrayType } from "@/@types/components";

export default function AboutUs() {
  const cardsObj: cardsArrayType = {
    cards: [
      {
        classCards: styles.classCards,
        classCard: styles.classCard,
        classImg: styles.classImg,
        classDivButtons: styles.classDivButtons,
        classButtons: styles.classButtons,
        img: {
          key: "next.svg",
          src: "/next.svg",
          alt: "next-svg",
          height: 20,
          width: 20,
        },
      },
      {
        classCards: styles.classCards,
        classCard: styles.classCard,
        classImg: styles.classImg,
        classDivButtons: styles.classDivButtons,
        classButtons: styles.classButtons,
        img: {
          key: "next.svg",
          src: "/next.svg",
          alt: "next-svg",
          height: 20,
          width: 20,
        },
      },
      {
        classCards: styles.classCards,
        classCard: styles.classCard,
        classImg: styles.classImg,
        classDivButtons: styles.classDivButtons,
        classButtons: styles.classButtons,
        img: {
          key: "next.svg",
          src: "/next.svg",
          alt: "next-svg",
          height: 20,
          width: 20,
        },
      },
    ],
  }
  return (
    <LayoutAboutUs>
      <div>About Us</div>
      <div className={styles.cards}>
        <Cards {...cardsObj} />
      </div>
    </LayoutAboutUs>
  );
}
