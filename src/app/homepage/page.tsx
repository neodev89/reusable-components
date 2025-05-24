'use client'
import { Button } from "@mui/material";
// import styles from './style.module.sass'
// import { homepageType } from "../@types/homepageType";
import LayoutHomepage from "./layout";

export default function Homepage() {
  
  // const changeToDidattica = ()=>{
  //    props.changePageFunct("Didattica");
  // }
  

  return (
    <LayoutHomepage>
      HOMEPAGE Ciao
      <br/>
      <Button variant="contained">
        click me!
      </Button>
    </LayoutHomepage>
  );
}