import { Dispatch, SetStateAction } from "react";

export interface MenuItem {
  _id: string;
  name: string;
  image: string;
}
export interface MenuItems {
  _id: string;
  name: string;
  image: string;
}
export interface FormInfo {
  image: string;
  name: string;
  description: string;
  basePrice: string;
  sizes: any;
  extraIngredientPrices: any;
  category: string;
  _id?: string | string[] | null | undefined;
}

export interface ItmeProps {
  name: string;
  addLabel: string;
  props: [{ name: string; price: number }];
  setProps?: any;
}
export interface Category {
  _id: string | number;
  name: string;
}
export interface User {
  _id: string | number;
  name: string;
  email: string;
  image?: string;
  phone?: string;
  streetAddress?: string;
  postalCode?: string;
  city?: string;
  country?: string;
  admin?: Boolean;
}
export interface Extra {
  price: string | number;
  name: string;
}

export interface Product {
    _id?: string | number
  image: string;
  name: string;
  size: { name: number | string };
  extras: any;
}

export interface Order {
  _id: string | number;
  name: string;
  userEmail: string;
  createdAt: Date;
  paid: Boolean;
  cartProducts: [{ name: string }];
}
