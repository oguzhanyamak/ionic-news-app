import { Articles } from "./Articles";

export interface ResponseModel{

    status:string
    totalResults:number
    articles:Articles[]

}
