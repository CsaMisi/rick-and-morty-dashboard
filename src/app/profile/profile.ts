import { Component, inject, Input, OnChanges, signal, SimpleChanges, WritableSignal } from '@angular/core';
import { CharacterService } from '../core/services/character.service';
import { Character } from '../core/models/character.model';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [CommonModule, RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.scss',
})
export class Profile implements OnChanges {
  @Input() id!:string
  private _characterService : CharacterService = inject(CharacterService)

  Character : WritableSignal<Character | null> = signal<Character | null>(null);
  Loading : WritableSignal<boolean> = signal<boolean>(true);

  private loadCharacter(id: string): void {
    this.Loading.set(true);
    this._characterService.getCharacterById(id).subscribe({
      next: (data) => {
        this.Character.set(data);
        this.Loading.set(false);
      },
      error: (err) => console.error('Failed to load character:', err)
    });
  }

  ngOnChanges(changes: SimpleChanges){
    if(changes['id'] && this.id){
      this.loadCharacter(this.id);
    }
  }
}
