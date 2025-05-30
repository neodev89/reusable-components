import React from "react"

interface titleType {
    children: string;
}

export const Title = (props: titleType) => {
    return (
        <h1>{props.children}</h1>
    )
}