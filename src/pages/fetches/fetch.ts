import Error from "next/error";
import { Dispatch, SetStateAction } from "react";

export const fetchData = async<T> (
    data: string,
    setError: Dispatch<SetStateAction<Error |undefined>>,
    setStatusRes: Dispatch<SetStateAction<string>>,
    setData: Dispatch<SetStateAction<T>>
) => {
    try {
        const res = await fetch(data, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        if (!res.ok) {
            setStatusRes(`${res.statusText}`);
        }

        const jsonData = await res.json();
        setData(jsonData);

    } catch (error) {
        setError(error as Error)
    }
}