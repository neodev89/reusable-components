"use server"
import { photoType } from '@/@types/photograph';
import { v4 as uuid } from "uuid";

import fs from 'fs/promises';
import path from 'path';
import { photo } from '@/content/photograph/initialState';

export const takePhoto = async (): Promise<photoType | null> => {
    const ID = uuid();
    try {
        const filePath = path.join(
            process.cwd(),
            "src",
            "content",
            "photograph",
            "photograph.json"
        );

        const resFile = await fs.readFile(filePath, 'utf-8');
        const gallery: photoType = JSON.parse(resFile);

        if (gallery) {
            const newGalleryDawn = gallery.photo.albe.map((el) => ({
                ...el,
                id: ID
            }));

            const newGallerySunset = gallery.photo.tramonti.map((el) => ({
                ...el,
                id: ID
            }));

            // gallery.albe = newGalleryDawn;
            // gallery.tramonti = newGallerySunset;

            const newGallery = {
                ...gallery,
                albe: newGalleryDawn,
                tramonti: newGallerySunset
            }

            return newGallery;
        } else {
            return { photo };
        }
    } catch (error) {
        console.error("Errore nel try-catch", error);
        return null;
    }
}