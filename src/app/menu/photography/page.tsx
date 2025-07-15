import { CardsPhoto } from "@/ui/cards/async-cards/cardsAsync"

import styles from "./style.module.sass";
import Link from "next/link";

export default function Photography() {
    return (
        <div className={styles.classPhotography}>
            <div className={styles.classPhoto}>
                <CardsPhoto />
            </div>
            <div className={styles.back}>
                <Link href={"/"} className={styles.classP}>
                    <button type="button" className={styles.classBtn}>
                        back
                    </button>
                </Link>
            </div>
        </div>
    )
}