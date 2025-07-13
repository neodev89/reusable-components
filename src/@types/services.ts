interface serviceType {
    services: Array<service>;
}

interface service {
    id: string;
    src: string;
    alt: string;
    description: string;
}

export type {
    serviceType,
    service
}