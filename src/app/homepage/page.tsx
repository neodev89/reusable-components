'use client'
import styles from './style.module.sass'
import LayoutHomepage from "./layout";

import { Title } from '@/ui/Title';
import { carouselType } from '@/@types/components';
import { Carousel } from '@/ui/carosello/carousel';
import { Main } from '@/ui/main/main';
import { SecondNavbar } from '@/ui/navbar/Navbar';
import { useEffect, useState } from 'react';
import { BodyMain } from '@/ui/main/bodyMain';
import { navbarType } from '@/@types/navbarTypes';


export default function Homepage() {
  const [dataNav, setDataNav] = useState<Array<navbarType>>([]);

  const [isHome, setIsHome] = useState<string>("page-1");

  const carouselImg: carouselType = {
    img: [
      {
        src: '/Codice1.jpeg',
        alt: "Codice incorniciato",
        key: "Codice incorniciato",
        height: 100,
        width: 200,
      },
      {
        src: '/Codice2.jpeg',
        alt: "Codice incorniciato",
        key: "Codice incorniciato",
        height: 100,
        width: 200,
      },
      {
        src: '/Codice3.jpeg',
        alt: "Codice incorniciato",
        key: "Codice incorniciato",
        height: 100,
        width: 200,
      },
      {
        src: '/Codice4.jpeg',
        alt: "Codice incorniciato",
        key: "Codice incorniciato",
        height: 100,
        width: 200,
      },
    ],
    classNameCarousel: styles.carousel,
    classNameDivImg: styles.divImg,
    classNameImg: styles.img,
    classNameDivBtn: styles.classNameDivBtn,
    classNameBtn: styles.classNameBtn
  }

  useEffect(() => {
    console.log("Ecco lo stato:", isHome);
    const fetchData = async () => {
      try {
        const res = await fetch("/api/take-data", {
          headers: {
            "Content-Type": "application/json"
          }
        });

        if (!res.ok) {
          console.error("Errore nel recupero dati dalla API")
        }

        const dati: Array<navbarType> = await res.json();
        console.log(dati);
        setDataNav(dati);
      } catch (error) {
        console.error("Errore nel try-catch: ", error);
      }
    }
    fetchData();
  }, [isHome]);

  return (
    <LayoutHomepage>
      <div className={styles.div_title}>
        <Title className={styles.title}>
          Sito Internet
        </Title>
      </div>
      <div className={styles.carosello}>
        <Carousel {...carouselImg} />
      </div>
      <Main
        classNameMain={styles.main}
        classNameNavbarMain={styles.navbar_main}
        classNameBodyMain={styles.body_main}
        children1={
          <SecondNavbar
            navbar={dataNav}
            classNameNavbar={styles.classNameNav}
            classNameButtons={styles.classNameBtn}
            setValue={setIsHome}
          />
        }
        children2={
          <BodyMain
            classNameBodyMain={styles.classNameBodyMain}
            state={isHome}
            text={dataNav}
          />
        }
      />
    </LayoutHomepage>
  );
}