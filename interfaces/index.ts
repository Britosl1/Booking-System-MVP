export interface Service {
    id: string;
    name: string;
    duration: string;
    price: string;
    description: string;
}

export interface Center {
    id: string;
    name: string;
    email: string;
    logo: string;
    description: string;
    services: Service[];
}