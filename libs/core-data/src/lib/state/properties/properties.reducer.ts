import { createReducer, on } from "@ngrx/store";
import { Property } from "../../common/property";
export const initialState: Property[] = [
{
    name: "Villa Hammamet Sud",
    nbClients : 15,
    availability: "DISPONIBLE",
    price: 2000,
    meuble: false,
    rating: 4.5,
    src: "https://behome-interiors.com/app/uploads/2023/01/amenagement-interieur-salon-pano.jpg.webp"
},
{
    name: "S1 Ain Zaghouan Nord",
    nbClients : 10,
    availability: "LOUE",
    price: "Négociable",
    meuble: false,
    rating: 4,
    src: "https://www.mesdepanneurs.fr/sites/mesdepanneurs.fr/files/field/image/peinture-salon.jpg"
},
{
    name: "Villa Ennasser II",
    nbClients : 4,
    availability: "INDISPONIBLE",
    price: 75,
    meuble: true,
    rating: 3.5,
    src: "https://prod-saint-gobain-fr.content.saint-gobain.io/sites/saint-gobain.fr/files/2022-07/salon-contemporain-la-maison-saint-gobain-02.jpg"
}
]
export const propertyReducer = createReducer(
    initialState
)
