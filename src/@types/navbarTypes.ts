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
    onFocus: (id: string) => void;
    focusID: string | null;
    classNameNavbar: string;
    classNameButtons: string;
    classFocusBtn: string;
}

type navbarType = {
    id: string;
    page: string;
}

export type { navbarTypes, ButtonTypes, navbarJsonType, navbarType };