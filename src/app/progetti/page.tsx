import { Title } from "@/ui/Title";
import styles from './style.module.sass';
import { CarouselVid } from "@/ui/carosello/carousel_vid";
import { carouselVidType } from "@/@types/components";
import LayoutProgetti from "./layout";

export const Progetti = () => {

    const carouselVid: carouselVidType = {
        vid : [
            {
                height: "250",
                width: "400",
                controls: true,
                autoplay: true,
                loop: true,
                source: {src: "/vid-writing-sass.mp4", type: "video/mp4"}
            },
            {
                height: "250",
                width: "400",
                controls: true,
                autoplay: true,
                loop: true,
                source: {src: "/prototype-website-video.mp4", type: "video/mp4"}
            },
        ],
        classNameDiv: styles.container_div,
        classNameVideo: styles.video,
        classNameDivBtn: styles.classNameDivBtn,
        classNameBtn: styles.classNameBtn,
    }
    return (
        <LayoutProgetti>
            <div className={styles.AboutUs}>
                <div className={styles.div_title}>
                    <Title className={styles.title}>
                        Progetti
                    </Title>
                </div>
                <div className={styles.carosello}>
                    <CarouselVid {...carouselVid} />
                </div>
            </div>
        </LayoutProgetti>
    )
}