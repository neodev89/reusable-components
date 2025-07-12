"use server"
import fs from 'fs/promises';
import path from 'path';
import { ImageObjType, imgType } from '@/@types/components';

export const takeImagesCards = async (): Promise<ImageObjType | null> => {
    try {
        const filePath = path.join(
            process.cwd(),
            'src',
            'content',
            'cards',
            'menu-cards.json'
        );

        const content = await fs.readFile(filePath, 'utf-8');
        const data: ImageObjType = JSON.parse(content);

        if (!data || (Array.isArray(data) && data.length === 0)) {
            console.error('Il file è vuoto o non contiene dati validi.');
        }

        const enriched = data.img.map((el) => ({
            ...el,
            height: 15, 
            width: 15
        }))

        const newObjData = {
            img: enriched
        }

        console.log("The new object is: ", newObjData);

        return newObjData;
    } catch (error) {
        console.error('Errore nel takeCards:', error);
        return null;
    }
}

// utilizzabile in sostituzione delle API non CRUD