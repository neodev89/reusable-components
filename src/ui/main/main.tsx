import { mainType } from "@/@types/components";

export const Main = ({
    classNameMain,
    classNameNavbarMain,
    classNameBodyMain,
    children1,
    children2
}: mainType) => {

    return (
        <div className={classNameMain}>
            <div className={classNameNavbarMain}>
                {/**Navbar per selezionare eventuali testi */}
                {children1}
            </div>
            <div className={classNameBodyMain}>
                {/**Testo da visualizzare */}
                {children2}
            </div>
        </div>
    )
}

