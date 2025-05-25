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

export type { navbarTypes, ButtonTypes };