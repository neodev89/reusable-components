import { navbarJsonType } from "@/@types/navbarTypes";

export const Navbar = ({
    navbar,
    setValue,
    classNameNavbar,
    classNameButtons,
}: navbarJsonType) => {

    // const handleId = () => {
    //     const matched = navbar.find(el => el.id)
    //     if (isTrue && matched) {
    //         setValue(matched.id);
    //         setIsTrue(true);
    //     } else {
    //         setValue("");
    //         setIsTrue(false);
    //     }
    // }

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

export const SecondNavbar = ({
    navbar,
    setValue,
    onFocus,
    focusID,
    classNameNavbar,
    classNameButtons,
    classFocusBtn,
}: navbarJsonType) => {

    const handleSetVal = (id: string) => {
        setValue(id);
    }

    return (
        <nav className={classNameNavbar}>
            {
                navbar.map((nav) => {
                    const isFocused = focusID === nav.id;
                    return (
                        <button
                            key={nav.id}
                            type="button"
                            name={nav.id}
                            className={isFocused ? classFocusBtn : classNameButtons}
                            onClick={() => handleSetVal(nav.id)}
                            onFocus={() => onFocus(nav.id)}
                        >
                            {nav.id}
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