export interface Property{
    name: string;
    availability: "LOUE" | "DISPONIBLE" | "INDISPONIBLE",
    price: number | string,
    nbClients: number,
    meuble: boolean,
    rating: number
    src: string
}