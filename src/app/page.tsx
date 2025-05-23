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
        <nav>
          <button type="button" onClick={() => setFlagPage("homepage")}>Homepage</button>
          <button type="button" onClick={() => setFlagPage("biografia")}>Biografia</button>
          <button type="button" onClick={() => setFlagPage("didattica")}>Didattica</button>
        </nav>
        { flagPage === 'homepage' && <Homepage /> }
        { flagPage === 'biografia' && <Biografia /> }
        { flagPage === 'didattica' && <Didattica /> }
      </main>
    </div>
  );

}