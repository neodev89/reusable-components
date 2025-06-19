"use client";
import { createContext } from "react";

export interface nextContextType {
    value: string;
    setValue: (val: string) => void;
}

// Creazione del contesto senza valore di default
export const NextContext = createContext<nextContextType | undefined>(undefined);
