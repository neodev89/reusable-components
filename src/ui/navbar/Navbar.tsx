"use client";

import { navbarJsonType } from "@/@types/navbarTypes";

export const Navbar = ({
    navbar,
    setValue,
    classNameNavbar,
    classNameButtons
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
