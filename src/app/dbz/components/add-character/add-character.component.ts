import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
})
export class AddCharacterComponent {
  @Output()
  public onNewCharacterEmitter: EventEmitter<Character> = new EventEmitter();

  public character: Character;

  constructor() {
    this.character = {
      name: '',
      power: 0,
    };
  }

  onAddCharacter(): void {
    console.log(this.character);

    if (this.character.name.length == 0) return;

    this.onNewCharacterEmitter.emit(this.character);

    this.character = {
      name: '',
      power: 0,
    };
  }
}
