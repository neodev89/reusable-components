'use client'
import styles from './style.module.sass'
import LayoutHomepage from "./layout";
import { Title } from '@/ui/Title';

export default function Homepage() {

  const populationHome = {
    titolo: "Guai",
    home: ["Carosello", "Mortadella", "Pancake"],
    footer: "cari amici miei"
  }

  return (
    <LayoutHomepage>
      <div className={styles.div_title}>
        <Title className={styles.title}>
          {populationHome.titolo}
        </Title>
      </div>
      <div className={styles.carosello}>
        <ul className={styles.ul}>
          {
            populationHome.home.map((home, index) => {
              return (
                <li key={`${index}`}>{home}</li>
              )
            })
          }
        </ul>
      </div>
      <div className={styles.main}>
        
      </div>
      <div className={styles.footer}>

      </div>
    </LayoutHomepage>
  );
}