import { Dispatch } from "react";

type homepageType = {
    changePageFunct : Dispatch<React.SetStateAction<string>>,
    flagPage:string
}

interface dictionary {
    homepage: typeHomepage;
    biografia: typeBiografia;
    didattica: typeDidattica;
}

interface typeHomepage {
    caption: string;
    slogan: string;
    urlImmagine1: string;
    urlImmagine2: string;
}

interface typeBiografia {
    caption: string;
    text1: string;
    text2: string;
    text3: string;
    urlImmagine1: string;
    urlImmagine2: string;
}

interface typeDidattica {
    caption: string;
    text1: string;
    text2: string;
    text3: string;
    urlImmagine1: string;
    urlImmagine2: string;
}

export type { homepageType, dictionary };