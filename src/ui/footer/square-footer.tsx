import { squareFooterType } from "@/@types/components";

export const SquareFooter = (
    {
        properties,
        classDivPropertyFooter,
        classImg,
        classNamePropertyFooter,
        classValuePropertyFooter,
    }: squareFooterType
) => {

    return (
        properties.map((prop) => {
            <div className={classDivPropertyFooter}>
                <div className={classNamePropertyFooter}>
                    {prop.name}
                </div>
                {
                    prop.pathImg ? (
                        <div className={classImg}>
                            {prop.pathImg}
                        </div>
                    ) : <></>
                }
                <div className={classValuePropertyFooter}>
                    {prop.value}
                </div>
            </div>
        })
    )
} 