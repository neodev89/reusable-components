"use client";
import { createContext, Dispatch, SetStateAction } from "react";

interface nextContextType {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
}

// Creazione del contesto senza valore di default
export const NextContext = createContext<nextContextType | undefined>(undefined);

