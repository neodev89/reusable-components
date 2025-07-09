'use client'
import styles from "./page.module.css";
import Homepage from "./homepage/page";
import Contatti from "./contatti/page";
import AboutUs from "./about_us/page";
import Head from "next/head";
import navbar from '../content/dynamic_navbar/navbar.json';

import { useCallback, useEffect, useState } from "react";
import { NextContext } from "../ui/context/myContext";
import { Navbar } from "../ui/navbar/Navbar";
import { Footer } from "@/ui/footer/square-footer";
import { Progetti } from "./progetti/page";
import { Menu } from "./menu/page";

export default function Home() {
  const data = navbar.navbar;
  const [flagPage, setFlagPage] = useState("homepage");
  const [isTrue, setIsTrue] = useState<boolean>(false);

  const setValuePage = useCallback((val: string) => {
    setFlagPage(val);
  }, []);

  useEffect(() => {
    console.log(flagPage);
    console.log("È vero che isTrue è ", isTrue)
  }, [flagPage, isTrue]);

  return (
    <NextContext.Provider value={
      { value: flagPage, setValue: setValuePage }
    }>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.div_navbar}>
            <Navbar
              navbar={data}
              classNameNavbar={styles.navbar}
              classNameButtons={styles.classNameBtn}
              setValue={setValuePage} 
              />
          </div>
          <div className={styles.dynamic_components}>
            <div className={styles.divCenter}>
              {flagPage === 'homepage' && <Homepage />}
              {flagPage === 'about us' && <AboutUs />}
              {flagPage === 'progetti' && <Progetti />}
              {flagPage === 'contatti' && <Contatti />}
              {flagPage === 'menu' && <Menu />}
              <div className={styles.footer}>
                <div className={styles.internal_footer}>
                  <Footer />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </NextContext.Provider>
  );
}