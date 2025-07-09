import { bodyMainType } from "@/@types/components"

export const BodyMain = ({
    classNameBodyMain, classNameText, classList, state, text, experience
}: bodyMainType) => {
    return (
        <div className={classNameBodyMain}>
            {
                text.filter(el => el.id === state).map((el) => {
                    return (
                        <div key={el.id} className={classNameText}>
                            <p key={el.id}>
                                {el.page}
                            </p>
                            <div className={classList}>
                                {
                                    el.id === "esperienza" ? (
                                        <ul>
                                            {
                                                experience.map((exp) => {
                                                    return (
                                                        <>
                                                            <li key={exp.id}>{`${exp.impresa}:`}
                                                                <ul>
                                                                    <li>{exp.value}</li>
                                                                </ul>
                                                            </li>
                                                        </>
                                                    )
                                                })
                                            }
                                        </ul>
                                    ) : (
                                        <></>
                                    )
                                }
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}