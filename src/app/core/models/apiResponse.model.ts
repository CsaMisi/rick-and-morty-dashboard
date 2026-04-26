import {  Character } from "./character.model";

//NOTE: Api handles pagination, we only need to worry about the request
export interface ApiResponse{
    info: {
            count: number;
        pages: number;
        next: string | null;
        prev: string | null;
    };
    results: Character[]
}