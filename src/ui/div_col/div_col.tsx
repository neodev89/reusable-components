import { divColType } from "@/@types/components"

export const DivCol = ({
    classNameDivCol,
    classNameImgCol,
    classNameTriangle,
    Triangle
}: divColType) => {
    return (
        <div className={classNameDivCol}>
            <div className={classNameImgCol}>
               {<Triangle className={classNameTriangle} />}
            </div>
        </div>
    )
}