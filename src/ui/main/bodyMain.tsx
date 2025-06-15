import { bodyMainType } from "@/@types/components"

export const BodyMain = ({
    classNameBodyMain, state, text
}: bodyMainType) => {
    return (
        <div className={classNameBodyMain}>
            {
                text.filter(el => el.id === state).map((el) => {
                    return (
                        <p key={el.id}>
                            {el.page}
                        </p>
                    )
                })
            }
        </div>
    )
}