'use client'
//import Image from "next/image";
import styles from "./page.module.css";
import Homepage from "./homepage/page";
import Didattica from "./didattica/page";
import Biografia from "./biografia/page";
import React, { useState } from "react";
// import Link from "next/link";

export default function Home() {
  const [flagPage, setFlagPage] = useState("Homepage");

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.div_navbar}>
          
        </div>
        <div className={styles.dynamic_components}>
          {flagPage === 'homepage' && <Homepage />}
          {flagPage === 'biografia' && <Biografia />}
          {flagPage === 'didattica' && <Didattica />}
        </div>
      </main>
    </div>
  );

}