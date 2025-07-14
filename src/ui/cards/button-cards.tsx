import { btnType } from "@/@types/components";
import { useState } from "react";

import Link from "next/link";

const Buttons = ({ classButtons, href }: btnType) => {

    const [isLike, setIsLike] = useState(false);

    return (
        <Link href={href}>
            <button
                type="button"
                name="like"
                className={classButtons}
                onClick={() => setIsLike(isLike)}
            >
                Mostramelo
            </button>
        </Link>
    )
}

export {
    Buttons
}