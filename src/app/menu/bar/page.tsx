"use client"
import styles from "./style.module.sass";
import takeDatas from "@/pages/api/take-datas";

import { Carousel } from "@/ui/carosello/carousel";
import { carouselType, imgType } from "@/@types/components";
import { useEffect, useState } from "react";
import { takeParamsImages } from "@/actions/takeParamsData";

export default function Bar() {

    const [menuImages, setMenuImages] = useState<Array<imgType>>([]);

    
    useEffect(() => {
        const takeDataMenu = async () => {
            const takeData = await takeParamsImages(
                { 
                    file: "menu_images.json",
                    nestedDir1: "menu", 
                    nestedDir2: "bar"
                }
            );
            
            if (takeData !== null) {
                setMenuImages(takeData)
                console.log(takeData);
            } else {
                console.error("La Action non ritorna i dati previsti");
            }
        }
        takeDataMenu();
    }, []);
    
    const carouselObj: carouselType = {
        img: menuImages,
        classNameCarousel: styles.carousel,
        classNameDivImg: styles.divImg,
        classNameImg: styles.img,
        classNameDivBtn: styles.classNameDivBtn,
        classNameBtn: styles.classNameBtn
    }

    return (
        <div className={styles.bar}>
            <div className={styles.central}>
                <div className={styles.grid_bar}>
                    <div className={styles.grid_head}>
                        <div className={styles.subgrid_images}>
                            <div className={styles.menu_images}>
                                <Carousel {...carouselObj} />
                            </div>
                        </div>
                        <div className={styles.subgrid_descriptions}>

                        </div>
                    </div>
                    <div className={styles.grid_menu}>

                    </div>
                    <div className={styles.grid_foot}>

                    </div>
                </div>
            </div>
        </div>
    )
}