import { Dispatch, SetStateAction } from "react";

export interface MenuItem {
    _id:string,
    name: string,
    image: string,
}
export interface FormInfo {
    image :string,
    name :string,
    description :string,
    basePrice :string,
    sizes :any,
    extraIngredientPrices :any,
    category :string,
    _id?:string
}

export interface ItmeProps {
    name :string,
    addLabel :string,
    props: [{name:string , price: number}],
    setProps?: any
}
export interface Category {
    _id: string | number,
    name: string
}