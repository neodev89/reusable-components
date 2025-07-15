import { btnType } from "@/@types/components";

import Link from "next/link";

const Buttons = ({ classButtons, href }: btnType) => {
    return (
        <Link className={classButtons} href={href}>
            Mostramelo
        </Link>
    )
}

export {
    Buttons
}