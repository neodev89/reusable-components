import { cardsType } from "@/@types/components";
import Image from "next/image";
import { useState } from "react";

const Buttons = ({ classButtons }: Partial<cardsType>) => {

    const [isLike, setIsLike] = useState(false);
    const [isDislike, setIsDislike] = useState(false);

    return (
        <>
            <button
                type="button"
                name="like"
                className={classButtons}
                onClick={() => setIsLike(isLike)}
            >
                <Image
                    height={30}
                    width={30}
                    src="/like-svg.png"
                    alt="like-png-button"
                />
            </button>
            <button
                type="button"
                name="dislike"
                className={classButtons}
                onClick={() => setIsDislike(isDislike)}
            >
                <Image
                    height={30}
                    width={30}
                    src={"/dislike-svg.png"}
                    alt="dislike-png-button"
                />
            </button>
        </>
    )
}

export {
    Buttons
}