"use client";
import { useContext } from "react"
import { NextContext } from "../context/myContext"
import styles from './styles.module.sass';

export const Navbar = () => {
    const context = useContext(NextContext);
    return (
        <nav className={styles.navbar}>
            <button type="button" className={styles.button_navbar} onClick={() => context?.setValue("homepage")}>Homepage</button>
            <button type="button" className={styles.button_navbar} onClick={() => context?.setValue("didattica")}>Didattica</button>
            <button type="button" className={styles.button_navbar} onClick={() => context?.setValue("biografia")}>Biografia</button>
        </nav>
    );
}