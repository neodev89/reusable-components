import { btnType } from "@/@types/components";

import Link from "next/link";

const Buttons = ({ classButtons, href, child }: btnType) => {
    return (
        <Link className={classButtons} href={href}>
            {child}
        </Link>
    )
}

export {
    Buttons
}