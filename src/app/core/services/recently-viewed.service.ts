import { Injectable, signal, computed, WritableSignal, Signal } from '@angular/core';
import { Character } from '../models/character.model';

const StorageKey: string = 'recently_viewed';
const MaxItems: number = 3;

@Injectable({ providedIn: 'root' })
export class RecentlyViewedService {
  private _recent: WritableSignal<Character[]> = signal<Character[]>(this._loadFromStorage());

  readonly recent: Signal<Character[]> = computed(() => this._recent());

  add(character: Character): void {
    this._recent.update((current) => {
      const filtered: Character[] = current.filter((c) => c.id !== character.id);
      const updated: Character[] = [character, ...filtered].slice(0, MaxItems);
      localStorage.setItem(StorageKey, JSON.stringify(updated));
      return updated;
    });
  }

  private _loadFromStorage(): Character[] {
    try {
      return JSON.parse(localStorage.getItem(StorageKey) ?? '[]');
    } catch {
      return [];
    }
  }
}
