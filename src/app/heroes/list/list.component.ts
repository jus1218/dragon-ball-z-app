import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListHeroComponent {
  public heroesName: string[];
  public lastRemoveHero?: string;

  constructor() {
    this.heroesName = ['Spiderman', 'thor', 'Iroman', 'Capitan America'].map(
      (e) => e.toUpperCase()
    );
  }

  removeLastHero(): void {
    this.lastRemoveHero = this.heroesName.pop() || this.lastRemoveHero;
  }
}
