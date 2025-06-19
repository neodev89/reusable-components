import { ReactNode } from "react";

interface navbarTypes {
    buttonElements:  Array<ButtonTypes>;
    classNameNav: string;
}

interface ButtonTypes {
    id: string;
    classNameBtn: string;
    children: ReactNode | null;
}

interface navbarJsonType {
    navbar: Array<navbarType>;
    setValue: (value: string) => void;
    classNameNavbar: string;
    classNameButtons: string;
}

type navbarType = {
    id: string;
    page: string;
}

export type { navbarTypes, ButtonTypes, navbarJsonType, navbarType };