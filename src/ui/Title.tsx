import React from "react"

interface titleType {
    children: string;
    className: string;
}

export const Title = (props: titleType) => {
    return (
        <div className={props.className}>
            <h1>{props.children}</h1>
        </div>
    )
}