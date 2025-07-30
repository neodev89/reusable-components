"use server"
import { gallery, photoType } from '@/@types/photograph';
import { initialGallery } from '@/content/photograph/initialState';
import { joinPaths } from '@/lib/paths/paths';

import fs from 'fs/promises';
// import { insertPhotoIsUnique } from './insertPhotIsUnique';

export const takePhoto = async (): Promise<photoType | null> => {
    try {
        const filePath = joinPaths("photograph", "photograph.json");
        const readFile = await fs.readFile(filePath, "utf-8");
        const gallery: photoType = JSON.parse(readFile);

        if (gallery) {
            const newGalleryDawn: gallery[] = gallery.photo.dawn.map((el) => (
                {
                ...el,
                date_up: new Date().toISOString(),
                category: "dawn",
                visible: true,
                tags: []
            }));

            const newGallerySunset: gallery[] = gallery.photo.sunset.map((el) => ({
                ...el,
                date_up: new Date().toISOString(),
                category: "sunset",
                visible: true,
                tags: []
            }));

            gallery.photo = {
                dawn: newGalleryDawn,
                sunset: newGallerySunset
            }

            // await insertPhotoIsUnique(gallery);

            return gallery;

        } else {
            return initialGallery;
        }
    } catch (error) {
        console.error("Errore nel try-catch", error);
        return null;
    }
}