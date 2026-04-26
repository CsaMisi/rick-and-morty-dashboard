import { Component, computed, inject, PLATFORM_ID, Signal, signal, WritableSignal } from '@angular/core';
import { RouterLink } from "@angular/router";

import { CommonModule, isPlatformServer, NgClass, NgOptimizedImage } from '@angular/common';

import { CharacterService } from '../core/services/character.service';
import { ThemeService } from '../core/services/theme.service';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { catchError, debounceTime, of, switchMap, tap } from 'rxjs';
import { Character } from '../core/models/character.model';

@Component({
  selector: 'app-home',
  imports: [NgClass, CommonModule, RouterLink, NgOptimizedImage],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly _characterService = inject(CharacterService);
  private readonly _platformId = inject(PLATFORM_ID);
  ThemeService = inject(ThemeService);

  Page : WritableSignal<number> = signal(1);
  SearchTerm : WritableSignal<string> = signal('');
  Loading : WritableSignal<boolean> = signal(false);

  private _searchParams = toObservable(
    computed(() => ({
      page: this.Page(),
      name: this.SearchTerm()
    }))
  )
  
  private charactersResponse = toSignal(
    this._searchParams.pipe(
      tap(() => this.Loading.set(true)),
      debounceTime(isPlatformServer(this._platformId) ? 0 : 300), // Skip debounce on the server to prevent NG0205, keep 300 to prevent spamming
      switchMap(({ page, name }) => 
        this._characterService.getAllCharacters(page, name).pipe(
          catchError(err => {
            console.error('Error fetching characters:', err);
            return of({ info: { pages: 1, count: 0, next: null, prev: null }, results: [] });
          })
        )
      ),
      tap(() => this.Loading.set(false))
    ),
    { initialValue: { info: { pages: 1, count: 0, next: null, prev: null }, results: [] as Character[] } }
  );
 

  characters : Signal<Character[]> = computed(() => this.charactersResponse()?.results ?? []);
  totalPages : Signal<number> = computed(() => this.charactersResponse()?.info.pages ?? 1);

  VisiblePages : Signal<number[]> = computed(() => {
    const currentPage : number = this.Page();
    const totalPages : number = this.totalPages();
    
    const pages : number[] = [];
    
    for (let i = 0; i < Math.min(5, totalPages); i++) {
      const pageNumber : number = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
      if(pageNumber >=1 && pageNumber <= totalPages)
        pages.push(pageNumber)
    }

    return pages;
  });


  OnSearch(event: Event){
    const input : HTMLInputElement = event.target as HTMLInputElement;
    this.SearchTerm.set(input.value);
    this.Page.set(1); 
  }

  NextPage(){
    this.Page.set(Math.min(this.totalPages(), this.Page() + 1));
  }

  PreviousPage(){
    this.Page.set(Math.max(1, this.Page() - 1));
  }
}
