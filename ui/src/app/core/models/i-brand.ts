import { IBase } from "./i-base";
import { IProduct } from "./i-product";

export interface IBrand extends IBase{
    brandId: number
    name: string
    products :IProduct[]
}