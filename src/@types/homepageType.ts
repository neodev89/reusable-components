interface dictionary {
    homepage: typeHomepage;
    biografia: typeBiografia;
    didattica: typeDidattica;
    footerProperties: Array<footerType>;
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
    urlImmagine3: string;
}

type typeDidattica = Omit<typeBiografia, "urlImmagine3">

interface footerType {
  name: string;
  value: unionValue;
  pathImmagine: unionPathImmagine;
}

type unionValue = string | number;
type unionPathImmagine = string | null;

export type { 
    dictionary,
    typeHomepage,
    typeBiografia,
    typeDidattica,
    footerType
 };