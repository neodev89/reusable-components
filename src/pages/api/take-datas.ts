import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs/promises";
import { joinPaths } from "@/lib/paths/paths";

export default async function takeDatas(
  req: NextApiRequest,
  res: NextApiResponse,
  file: { src: string; dir1: string; }
) {
  try {
    const filePath = joinPaths(file.src, file.dir1);

    const promiseFile = fs.readFile(filePath, {
        encoding: "utf-8"
    });

    const parseFile = JSON.parse(
        await promiseFile
    );

    if (parseFile.length <= 0) {
        res.status(404).json({
            message: "This file is empty!"
        });
    } else {
        res.status(200).json(parseFile);
    }

  } catch (error) {
    console.error("Errore nel try-catch: ", error);
    res.status(500).json({
        message: "path file is not valid"
    });
  }
}
