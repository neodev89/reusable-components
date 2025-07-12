"use server"
import { dataProducts } from "@/@types/products";
import fs from "fs/promises";
import path from "path";

export const takeProducts = async (): Promise<dataProducts | null> => {
    try {
        const filePath = path.join(
            process.cwd(),
            "src",
            "content",
            "dynamic_navbar",
            "dynamic_products.json"
        );

        const content = await fs.readFile(filePath, 'utf-8');
        const dati = JSON.parse(content);
        const products: dataProducts = dati;
        console.log("i prodotti in products sono: ", products);

        return products;

    } catch (error) {
        console.error("Errore nel try-catch: ", error);
        return null;
    }
}