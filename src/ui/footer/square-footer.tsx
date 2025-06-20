import { squareFooterType } from "@/@types/components";

export const SquareFooter: React.FC<squareFooterType> = (
    {
        properties,
        classDivPropertyFooter,
        classNamePropertyFooter,
        classValuePropertyFooter,
    }: squareFooterType
) => {

    return properties.map((prop, index: number) => {
        return (
            <div key={`${index}`} className={classDivPropertyFooter}>
                <div className={classNamePropertyFooter}>
                    {prop.name}
                </div>
                <div className={classValuePropertyFooter}>
                    {prop.value}
                </div>
            </div>
        );
    });
} 