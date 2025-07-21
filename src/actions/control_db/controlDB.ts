import { gallery } from "@/@types/photograph";
import { supabase } from "@/lib/supabaseClient";
import { takePhoto } from "../takePhoto";

type originId = Pick<gallery, "origin_id">;

export const controlDataDb = async (): Promise<originId[] | unknown> => {
    try {
        const { data: dbData, error: dbError } = await supabase
            .from("fotografie")
            .select("origin_id");

        if (dbError) {
            console.log("Errore nella chiamata db", dbError);
            return [dbError];
        } else {
            const dataPhotos = await takePhoto();
            if (!dataPhotos) return [];
            const { dawn, sunset } = dataPhotos.photo;
            const allPhoto = [...dawn, ...sunset];

            const controlOriginId = allPhoto.filter(photo => {
                const isControlled = dbData.some(
                    dbItem => dbItem.origin_id === photo.origin_id
                );
                return isControlled;
            });
        }
    } catch (error) {
        console.error("Errore nel try-catch", error);
        return [error];
    }
}