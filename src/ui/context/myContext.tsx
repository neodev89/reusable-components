"use client";
import { createContext, Dispatch, SetStateAction } from "react";

export interface nextContextType {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

// Creazione del contesto senza valore di default
export const NextContext = createContext<nextContextType | undefined>(undefined);
