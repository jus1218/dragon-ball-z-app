import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public characterList: Character[] = [{ id: '', name: 'Trunks', power: 200 }];
  @Input()
  public lastDeleteCharacter?: Character;

  @Output()
  public deleteCharacterByIdEmitter: EventEmitter<string> = new EventEmitter();

  @Output()
  public onRecoverCharacterEmitter: EventEmitter<Character> =
    new EventEmitter();

  onDeleteCharacterById(id: string | undefined): void {
    if (id == undefined) return;
    this.lastDeleteCharacter = this.characterList.find((c) => c.id === id);

    this.deleteCharacterByIdEmitter.emit(id);
  }

  onRecoverCharacter(): void {
    if (this.lastDeleteCharacter == null) return;
    this.onRecoverCharacterEmitter.emit(this.lastDeleteCharacter);

    this.lastDeleteCharacter = undefined;
  }
}
