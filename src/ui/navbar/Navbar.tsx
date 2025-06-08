import { navbarJsonType } from "@/@types/navbarTypes";

export const Navbar = ({
    navbar,
    setValue,
    classNameNavbar,
    classNameButtons,
}: navbarJsonType) => {
    return (
        <nav className={classNameNavbar}>
            {
                navbar.map((nav) => {
                    return (
                        <button
                            key={nav.id}
                            type="button"
                            className={classNameButtons}
                            onClick={() => setValue(nav.page)}
                        >
                            {nav.page}
                        </button>
                    )
                })
            }
        </nav>
    );
}

/**import { useEffect, useState } from "react";
import { navbarJsonType } from "@/@types/navbarTypes";

const fetchNavbarData = async (): Promise<navbarJsonType[]> => {
    const response = await fetch("/api/navbar"); // Modifica con l'endpoint corretto
    return response.json();
};

export const Navbar = ({
    setValue,
    classNameNavbar,
    classNameButtons,
}: Omit<navbarJsonType, "navbar">) => {
    const [navbar, setNavbar] = useState<navbarJsonType[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchNavbarData();
                setNavbar(data);
            } catch (error) {
                console.error("Errore nel recupero della navbar:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <nav className={classNameNavbar}>
            {navbar.map((nav) => (
                <button
                    key={nav.id}
                    type="button"
                    className={classNameButtons}
                    onClick={() => setValue(nav.page)}
                >
                    {nav.page}
                </button>
            ))}
        </nav>
    );
};
 */