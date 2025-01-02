import { IBase } from "./i-base"

export interface IProduct extends IBase{
    productId: number
    productName: string
    description: string
    price: number
    brandId: number
    brandName: string
}