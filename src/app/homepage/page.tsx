'use client'
import styles from './style.module.sass'
import LayoutHomepage from "./layout";

import { Title } from '@/ui/Title';
import { carouselType } from '@/@types/components';
import { Carousel } from '@/ui/carosello/carousel';
import { Main } from '@/ui/main/main';
import { Navbar } from '@/ui/navbar/Navbar';


export default function Homepage() {

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
      <div className={styles.main}>
        <Main 
          classNameMain={styles.main}
          classNameNavbarMain={styles.navbar_main}
          classNameBodyMain={styles.body_main} 
          children1={<Navbar />} 
          children2={<BodyMain />} 
        />

      </div>
      <div className={styles.footer}>

      </div>
    </LayoutHomepage>
  );
}