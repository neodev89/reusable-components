import { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import fs from "fs/promises";
import { navbarType } from "@/@types/navbarTypes";

export default async function handlerTakeData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const filePath = path.join(
      process.cwd(),
      "src",
      "dynamic_navbar",
      "dynamic_text_homepage.json"
    );
    console.log(filePath);

    const promiseDynamicText = fs.readFile(filePath, { 
        encoding: "utf-8" 
    });
    const parseDynamicText = JSON.parse(
        await promiseDynamicText
    );

    const { dynamic_homepage } = parseDynamicText;

    if (!Array.isArray(dynamic_homepage)) {
      res.status(404).json({ message: "parseDynamicText is not array" });
    } else if (dynamic_homepage.length === 0) {
        res.status(404).json({ message: "parseDynamicText is not found" });
    } else {
      res.status(200).json(dynamic_homepage);
    }
  } catch (error) {
    console.error("Errore nel try-catch: ", error);
    res.status(500).json({ message: "path file is not valid!" });
  }
};
