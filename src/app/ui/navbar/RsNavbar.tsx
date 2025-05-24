import { navbarTypes } from "@/app/@types/navbarTypes";

export const RsNavbar: React.FC<navbarTypes> = ({
    buttonElements, classNameNav
}) => {
    return (
        <nav className={classNameNav}>
            {
                buttonElements.map((btn) => {
                    return (
                        <>
                            <button key={btn.id} type="button" className={btn.classNameBtn}>
                                {btn.children}
                            </button>
                        </>
                    )
                })
            }
        </nav>
    );
}