import { IBase } from "./i-base";

export interface IProductComment extends IBase{
    productCommentId: number
    comment: string
    productId: number
    productName: string
}