import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable, tap } from "rxjs";
import { ApiResponse } from "../models/apiResponse.model";
import { Character } from "../models/character.model";
import { RecentlyViewedService } from "./recently-viewed.service";

@Injectable({
    providedIn: 'root'
})

export class CharacterService{
    private readonly _apiUrl = "https://rickandmortyapi.com/api/character";
    private _httpClient = inject(HttpClient)
    private readonly _recentlyViewed = inject(RecentlyViewedService);

    getAllCharacters(pages: number = 1, name: string = "") : Observable<ApiResponse>{
        if(name != "")
            return this._httpClient.get<ApiResponse>(`${this._apiUrl}?page=${pages}&name=${name}`);
        else
            return this._httpClient.get<ApiResponse>(`${this._apiUrl}?page=${pages}`);    
    }

    getCharacterById(id: string | number): Observable<Character> {
        return this._httpClient.get<Character>(`${this._apiUrl}/${id}`).pipe(
        tap(character => this._recentlyViewed.add(character)));
    }
}