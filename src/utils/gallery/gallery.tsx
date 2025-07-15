"use server"
import { takePhoto } from "@/actions/takePhoto";
import { ClickAwayListener } from "@mui/material";

import styles from "./styles.module.sass";

export const Gallery = async () => {
    const gallery = await takePhoto();

    if (gallery !== null) {
        return (
            <div className={styles.gallery}>
                
            </div>
        )
    }
}