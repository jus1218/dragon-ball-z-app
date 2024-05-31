import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  // public lastDeleteCharacter?: Character;

  public characters: Character[] = [
    { id: uuid(), name: 'Krilin', power: 500 },
    { id: uuid(), name: 'Goku', power: 20000 },
    { id: uuid(), name: 'Vegeta', power: 15000 },
  ];

  constructor() {}

  onNewCharacter(character: Character): void {
    // debugger;
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    };

    this.characters = [...this.characters, newCharacter];
  }

  onDeleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  onRecoverCharacter(character: Character): void {
    this.characters = [...this.characters, character];
  }
}
