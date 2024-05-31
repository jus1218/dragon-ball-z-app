import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/character';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  // styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private dbzService: DbzService) {}

  get characters(): Character[] {
    return [...this.dbzService.characters]; //* esto se hace porque los datos estan en memory volatil
  }

 

  onDeleteCharacter(id: string):void{
    this.dbzService.onDeleteCharacterById(id);
  }

  onNewCharacter(character: Character):void{
    this.dbzService.onNewCharacter(character);
  }
  onRecoverCharacter(character:Character):void{

    this.dbzService.onRecoverCharacter(character);
  }
}
