import { reduxThunkType } from "@/@types/async-redux";
import { createAsyncThunk } from "@reduxjs/toolkit";

export function createDynamicThunk<T>(config: reduxThunkType<T>) {
    return createAsyncThunk(
        config.typeRedux,
        async (): Promise<T> => {
            const res = await fetch(config.fileFetch);
            if (!res.ok) throw new Error("Fetch failed");
            return await res.json();
    });
}
// approfondire la funzione di Redux e trovare dove applicarla