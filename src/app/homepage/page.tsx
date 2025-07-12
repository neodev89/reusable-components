'use client'
import styles from './style.module.sass'
import Error from 'next/error';
import experience from '../../content/aboutus/esperienze.json';

import { Title } from '@/ui/Title';
import { carouselType } from '@/@types/components';
import { Carousel } from '@/ui/carosello/carousel';
import { Main } from '@/ui/main/main';
import { SecondNavbar } from '@/ui/navbar/Navbar';
import { useEffect, useState } from 'react';
import { BodyMain } from '@/ui/main/bodyMain';
import { navbarType } from '@/@types/navbarTypes';
// import { fetchData } from '@/pages/fetches/fetch';
import { images } from '@/ui/carosello/images-carousel';
import { handlerTakeData } from '../actions/takeData';


export default function Homepage() {
  const [data, setData] = useState<Array<navbarType>>([]);
  const [isHome, setIsHome] = useState<string>("inizio");
  // const [error, setError] = useState<Error | undefined>(undefined);
  // const [statusRes, setStatusRes] = useState<string>("");
  // const [focusButtons, setFocusButtons] = useState<boolean>(false);

  const carouselImg: carouselType = {
    img: images,
    classNameCarousel: styles.carousel,
    classNameDivImg: styles.divImg,
    classNameImg: styles.img,
    classNameDivBtn: styles.classNameDivBtn,
    classNameBtn: styles.classNameBtn
  }

  // useEffect(() => {
  //   console.log("Ecco lo stato:", isHome);
  //   fetchData("/api/take-data", setError, setStatusRes, setData);
  // }, [isHome]);

  useEffect (() => {
    const fetchNavbarData = async () => {
      const dati = await handlerTakeData();
      setData(dati);
    }
    fetchNavbarData();
  }, []);

  return (
    <>
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
            navbar={data}
            classNameNavbar={styles.classNameNav}
            classNameButtons={styles.classNameBtn}
            setValue={setIsHome}        
          />
        }
        children2={
          <BodyMain
            classNameBodyMain={styles.classNameBodyMain}
            classNameText={styles.classNameText}
            classList={styles.classList}
            state={isHome}
            text={data}
            experience={experience.esperienze}
          />
        }
      />
    </>
  );
}