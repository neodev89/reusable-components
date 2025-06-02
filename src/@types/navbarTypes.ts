import { Dispatch, ReactNode, SetStateAction } from "react";

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
    navbar: Array<{id: string, page: string}>;
    setValue: Dispatch<SetStateAction<string>>;
    classNameNavbar: string;
    classNameButtons: string;
}

export type { navbarTypes, ButtonTypes, navbarJsonType };