"use server"
import { serviceType } from "@/@types/services";
import fs from "fs/promises";
import path from "path";

export const takeService = async (): Promise<serviceType | null> => {
    try {
        const filePath = path.join(
            process.cwd(),
            "src",
            "content",
            "services",
            "services.json"
        );

        const content = await fs.readFile(filePath, 'utf-8');
        const dati = JSON.parse(content);
        const services: serviceType = dati;


        return services;

    } catch (error) {
        console.error("Errore nel try-catch: ", error);
        return null;
    }
}