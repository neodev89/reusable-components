import { photoType } from "@/@types/photograph";
import { supabase } from "@/lib/supabaseClient";
import { v4 as uuid } from "uuid";

export const insertPhotoIsUnique = async (photo: photoType) => {
    try {

        const { data: duplicates } = await supabase
            .from("fotografie")
            .select("origin_id, url, category")
            .order("date_up", { ascending: true });

        const seen: Set<string> = new Set();
        const idsToDelete = [];

        if (duplicates !== null) {
            for (const item of duplicates) {
                const key = `${item.origin_id}`;
                if (seen.has(key)) {
                    idsToDelete.push(key);
                    console.log("ids da cancellare", idsToDelete)
                } else {
                    console.log("Non ci sono duplicati")
                    seen.add(key);
                }
            }
        }

        await supabase
            .from("fotografie")
            .delete()
            .in("origin_id", idsToDelete)
            .select();

        const newDawn = photo.photo.dawn.map((el) => ({
            ...el,
            id: `${uuid()}`
        }));

        const newSunset = photo.photo.sunset.map((el) => ({
            ...el,
            id: `${uuid()}`
        }));

        const gallery = [...newDawn, ...newSunset];

        await supabase
            .from("fotografie")
            .insert(gallery);

        // if (error) {
        //     console.error("Errore nell'inserimento dei dati", error);
        // } else {
        //     console.log("I dati sono stati caricati")
        // }

    } catch (error) {
        console.error("Errore nel try-catch", error);
    }
}