'use client'
import styles from "./page.module.css";
import Homepage from "./homepage/page";
import Didattica from "./didattica/page";
import Biografia from "./biografia/page";
import { useEffect, useState } from "react";
import { NextContext } from "../ui/context/myContext";
import { Navbar } from "../ui/navbar/Navbar";

export default function Home() {
  const [flagPage, setFlagPage] = useState("Homepage");

  useEffect(() => {
    console.log(flagPage);
  }, [flagPage]);

  return (
    <NextContext.Provider value={ 
      { value: flagPage, setValue: setFlagPage }
    }>
      <div className={styles.page}>
        <main className={styles.main}>
          <div className={styles.div_navbar}>
            <Navbar />
          </div>
          <div className={styles.dynamic_components}>
            {flagPage === 'homepage' && <Homepage />}
            {flagPage === 'biografia' && <Biografia />}
            {flagPage === 'didattica' && <Didattica />}
          </div>
        </main>
      </div>
    </NextContext.Provider>
  );
}