"use server"
import { photoType } from '@/@types/photograph';
import { v4 as uuid } from "uuid";
import { photo } from '@/content/photograph/initialState';
import { joinPaths } from '@/lib/paths/paths';
import { supabase } from '@/lib/supabaseClient';

import fs from 'fs/promises';

export const takePhoto = async (): Promise<photoType | null> => {
    try {
        const filePath = joinPaths("photograph", "photograph.json");
        const readFile = await fs.readFile(filePath, "utf-8");
        const gallery: photoType = JSON.parse(readFile);

        if (gallery) {
            const newGalleryDawn = gallery.photo.dawn.map((el) => ({
                ...el,
                id: uuid(),
                date_up: new Date().toISOString(),
                category: "dawn",
                visible: true,
                tags: []
            }));

            const newGallerySunset = gallery.photo.sunset.map((el) => ({
                ...el,
                id: uuid(),
                date_up: new Date().toISOString(),
                category: "sunset",
                visible: true,
                tags: []
            }));

            // gallery.albe = newGalleryDawn;
            // gallery.tramonti = newGallerySunset;

            const newGallery = {
                ...gallery,
                dawn: newGalleryDawn,
                sunset: newGallerySunset
            }

            const allPhoto = [...newGalleryDawn, ...newGallerySunset];

            const { error } = await supabase
                .from("fotografie")
                .insert(allPhoto);

            if (error) {
                console.error("Errore nell'inserimento in db", error);
                return null;
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