import { rsButtonTypes, rsInputTypes } from "@/@types/rsInputTypes";
import style from './classInputs.module.sass';

export const RsInput = ({
    type, name, id, htmlFor, value, ReactNodeLabel, ...other
}: rsInputTypes) => {

    return (
        <div className={style.classInputs}>
            <label htmlFor={htmlFor}>{ReactNodeLabel}</label>
            <input id={id} type={type} name={name} value={value} {...other}/>
        </div>
    )
}

export const RsButton = ({
    classNameDiv, classNameBtn1, ReactNodeBtn
}: rsButtonTypes) => {
    return (
        <div className={classNameDiv}>
            <button type="button" className={classNameBtn1}>
                {ReactNodeBtn}
            </button>
        </div>
    )
}