import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs/promises";
import { imgType } from "@/@types/components";

export default async function takeCards(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const filePath = path.join(
            process.cwd(),
            "src",
            "content",
            "cards",
            "menu-cards.json"
        );

        const content = await fs.readFile(filePath, "utf-8");
        const data = JSON.parse(content);

        // ✅ Check più robusto
        if (!data || (Array.isArray(data) && data.length === 0)) {
            return res.status(404).json({ message: "Il file è vuoto o non contiene dati validi." });
        }
        
        const enriched: imgType[] = data.img.map((el: imgType) => ({
            ...el,
            height: 15,
            width: 15
        }));

        console.log("I dati: ", enriched);
        res.status(200).json(enriched);

    } catch (error) {
        console.error("Errore nel try-catch: ", error);
        return res.status(500).json({ message: "Errore nella lettura del file o nel percorso." });
    }
}
