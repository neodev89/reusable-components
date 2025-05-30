'use client'
import styles from './style.module.sass'
import LayoutHomepage from "./layout";
import { Title } from '@/ui/Title';

export default function Homepage() {

  const populationHome = {
    titolo: "Guai", 
    home: ["Carosello", "Mortadello", "Pancake"],
    footer: "cari amici miei"
  }

  return (
    <LayoutHomepage>
      <div className={styles.title}>
        <Title>{populationHome.titolo}</Title>
      </div>
      <div className={styles.carosello}>
        <ul>
        {
          populationHome.home.map((home, index) => {
            return (
              <li key={`${index}`}>{home}</li>
            )
          })
        }
        </ul>
      </div>
      <div className={styles.footer}>

      </div>
    </LayoutHomepage>
  );
}