"use server"
import { navbarType } from "@/@types/navbarTypes";
import fs from "fs/promises";
import path from "path";

export const handlerTakeData = async (): Promise<navbarType[]> => {
    try {
        const filePath = path.join(
            process.cwd(),
            "src",
            "content",
            "dynamic_navbar",
            "dynamic_text_homepage.json"
        );

        const content = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(content);
        const home: navbarType[] = data.dynamic_homepage;

        return home;

    } catch (error) {
        console.error("Errore nel try-catch: ", error);
        return [];
    }
}