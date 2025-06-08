'use client'
import styles from "./page.module.css";
import Homepage from "./homepage/page";
import Didattica from "./didattica/page";
import Biografia from "./biografia/page";

import { useEffect, useState } from "react";
import { NextContext } from "../ui/context/myContext";
import { Navbar } from "../ui/navbar/Navbar";

import Head from "next/head";
import navbar from '../dynamic_navbar/navbar.json';

export default function Home() {
  const [flagPage, setFlagPage] = useState("homepage");
  const data = navbar.navbar

  useEffect(() => {
    console.log(flagPage);
  }, [flagPage]);

  return (
    <NextContext.Provider value={
      { value: flagPage, setValue: setFlagPage }
    }>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.div_navbar}>
            <Navbar
              navbar={data}
              classNameNavbar={styles.navbar}
              classNameButtons={styles.classNameBtn}
              setValue={setFlagPage}
            />
          </div>
          <div className={styles.dynamic_components}>
            <div className={styles.divCol}>
              {/**Div con figure colorate. Il div sarà un rettangolo alto
               * contenente un motivo colorato (magari un triangolo rettangolo blue)
               */}
            </div>
            <div className={styles.divCenter}>
              {flagPage === 'homepage' && <Homepage />}
              {flagPage === 'biografia' && <Biografia />}
              {flagPage === 'didattica' && <Didattica />}
            </div>
            <div className={styles.divCol}>
              {/**Div con figure colorate. Il div sarà un rettangolo alto
               * contenente un motivo colorato (magari un triangolo rettangolo blue)
               */}
            </div>

          </div>
        </main>
      </div>
    </NextContext.Provider>
  );
}