"use server"
import fs from 'fs/promises';
import path from 'path';
import { imgType } from '@/@types/components';

export const takeImagesCards = async (): Promise<imgType[]> => {
    try {
        const filePath = path.join(
            process.cwd(),
            'src',
            'content',
            'cards',
            'menu-cards.json'
        );

        const content = await fs.readFile(filePath, 'utf-8');
        const data = JSON.parse(content);

        if (!data || (Array.isArray(data) && data.length === 0)) {
            console.error('Il file è vuoto o non contiene dati validi.');
        }

        const enriched: imgType[] = data.img.map((el: imgType) => ({
            ...el,
            height: 15,
            width: 15,
        }));

        return enriched;
    } catch (error) {
        console.error('Errore nel takeCards:', error);
        return [];
    }
}

// utilizzabile in sostituzione delle API non CRUD