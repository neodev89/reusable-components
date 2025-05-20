'use client'

import { Button } from "@mui/material";
import styles from "../page.module.css";
import { homepageType } from "../types/homepageType";

export default function Homepage(props:homepageType) {

  const changeToDidattica = ()=>{
     props.changePageFunct("Didattica");
  }
  

  return (
    <div className={styles.homepage}>
      HOMEPAGE Ciao
      <br/>
      <Button variant="contained" onClick={changeToDidattica}>
        click me!
      </Button>
    </div>
  );
}