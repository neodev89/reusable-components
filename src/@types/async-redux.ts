interface reduxThunkType<T> {
    typeRedux: string;
    fileFetch: string;
    data: T;
}

export type {
    reduxThunkType,
}