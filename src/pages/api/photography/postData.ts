import { NextApiRequest, NextApiResponse } from "next";
import { joinPaths } from "@/lib/paths/paths";
import { photoType } from "@/@types/photograph";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // il file json è nel path 'src/content/' seguito da 'photograph'
    try {
        if (req.method === "POST") {
            const filePath = joinPaths("photograph", "photograph.json");
            const response = await fetch(filePath);
            const data: photoType = await response.json();

            return data;
        }
    } catch (error) {
        res.status(500).json({
            message: "Errore nel try-catch", error
        });
    }
}