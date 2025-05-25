'use client'
import styles from './style.module.sass'
import LayoutHomepage from "./layout";
import { ButtonTypes } from '../../@types/navbarTypes';
import { RsNavbar } from '../../ui/navbar/RsNavbar';

export default function Homepage() {
  const btnNav : ButtonTypes[] = [
    { id: "1", classNameBtn: styles.classNameBtn, children: "page1" },
    { id: "2", classNameBtn: styles.classNameBtn, children: "page2" },
    { id: "3", classNameBtn: styles.classNameBtn, children: "page3" },
    { id: "4", classNameBtn: styles.classNameBtn, children: "page4" }
  ]

  return (
    <LayoutHomepage>
      <div className={styles.home_navbar}>
        <RsNavbar classNameNav={styles.classNameNav} buttonElements={btnNav} />
      </div>
    </LayoutHomepage>
  );
}