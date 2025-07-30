"use server"
import { imgType } from "@/@types/components";
import { joinPaths } from "@/lib/paths/paths";
import fs from "fs/promises";

type paramsPath = {
    nestedDir1: string;
    nestedDir2: string;
    file: string;
}

export const takeParamsImages = async (
    props: paramsPath
): Promise<Array<imgType> | null> => {
    try {
        if (props.nestedDir1 && props.nestedDir2) {

            const filePath = joinPaths(props.file, props.nestedDir1, props.nestedDir2, );
            const readFile = await fs.readFile(filePath, 'utf-8');

            if (readFile.length > 0) {
                const parseData = JSON.parse(readFile);
                let finalFile: Array<imgType> = parseData.img;

                const newImages = finalFile.map((img) => ({
                    ...img,
                    height: Number(img.height),
                    width: Number(img.width),
                    text: "",
                    href: "#"
                }));
                console.log("Ecco le immagini del Menu: ", newImages);

                return finalFile = newImages;
            } else {
                console.error("Il file è vuoto o non esiste");
                return [];
            }

        } else if (props.nestedDir1) {

            const filePath = joinPaths(props.nestedDir1, props.file);
            const readFile = await fs.readFile(filePath, 'utf-8');

            if (readFile.length > 0) {
                const parseData = JSON.parse(readFile);
                let finalFile: Array<imgType> = parseData.img;

                const newImages: Array<imgType> = finalFile.map((img) => ({
                    ...img,
                    height: Number(img.height),
                    width: Number(img.width),
                    text: "",
                    href: "#"
                }));
                console.log("Ecco le immagini del Menu: ", newImages);
                return finalFile = newImages;
            } else {
                console.error("Il file è vuoto o non esiste");
                return [];
            }

        } else {

            const filePath = joinPaths(props.file);
            const readFile = await fs.readFile(filePath, 'utf-8');

            if (readFile.length > 0) {
                const parseData = JSON.parse(readFile);
                let finalFile: Array<imgType> = parseData.img;

                const newImages: Array<imgType> = finalFile.map((img) => ({
                    ...img,
                    height: Number(img.height),
                    width: Number(img.width),
                    href: "#"
                }));
                console.log("Ecco le immagini del Menu: ", newImages);

                return finalFile = newImages;
            } else {
                console.error("Il file è vuoto o non esiste");
                return [];
            }
        }
    } catch (error) {
        console.log("Errore nel try-catch", error);
        return null;
    }
}