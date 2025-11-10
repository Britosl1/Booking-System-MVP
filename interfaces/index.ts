export interface Services {
    id: string;
    name: string;
    duration: string;
    price: string;
    description: string;
}

export interface Centers {
    id: string;
    name: string;
    email: string;
    logo: string;
    description: string;
    services: Services[];
}