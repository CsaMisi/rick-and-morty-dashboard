import {  Character } from "./character.model";

//NOTE: Api handles pagination, we only need to worry about the request
export interface ApiResponse{
    count: number,
    pages: number,
    next: string,
    prev: string,
    results: Character[]
}