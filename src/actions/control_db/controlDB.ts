import { gallery } from "@/@types/photograph";
import { supabase } from "@/lib/supabaseClient";
import { takePhoto } from "../takePhoto";
import { v4 as uuid } from "uuid";

type originId = Pick<gallery, "origin_id">;

export const controlDataDb = async (): Promise<originId[] | any> => {
    try {
        const { data: dbData, error: dbError } = await supabase
            .from("fotografie")
            .select("origin_id")
        ;

        if (dbError) {
            console.log("Errore nella chiamata db", dbError);
            return [dbError];
        } else {
            const dataPhotos = await takePhoto();
            if (!dataPhotos) return [];

            const { dawn, sunset } = dataPhotos.photo;
            const allOriginIdPhoto = [...dawn, ...sunset];

            // Foto che NON sono ancora nel DB
            const newDawn = dawn.filter(photo =>
                !dbData.some(el => el.origin_id === photo.origin_id)
            ).map(photo => ({
                ...photo,
                id: uuid(),
            }));

            const newSunset = sunset.filter(photo =>
                !dbData.some(el => el.origin_id === photo.origin_id)
            ).map(photo => ({
                ...photo,
                id: uuid(),
            }));

            const photosToAdd = [...newDawn, ...newSunset];

            // Foto già presenti nel DB
            const duplicates = allOriginIdPhoto.filter(photo =>
                dbData.some(el => el.origin_id === photo.origin_id),
            );

            // Carica solo quelle non presenti
            if (photosToAdd.length > 0) {
                const { error: insertError } = await supabase
                    .from("fotografie")
                    .insert(photosToAdd);

                if (insertError) {
                    console.error("Errore nell'inserimento foto", insertError);
                    return [insertError];
                }
            }

            console.log("Foto nuove caricate:", photosToAdd.length);
            console.log("Foto duplicate scartate:", duplicates.length);

            return {
                added: photosToAdd,
                duplicates,
            };

        }
    } catch (error: any) {
        console.error("Errore nel try-catch", error);
        return [error];
    }
}