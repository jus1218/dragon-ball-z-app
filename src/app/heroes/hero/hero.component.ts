import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
})
export class HeroComponent {
  public title: string;
  public name: string;
  public age: number;

  readonly initName: string = 'Spiderman';
  readonly initAge: number = 30;

  constructor() {
    this.title = this.initName;
    this.name = this.initName;
    this.age = this.initAge;
  }

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  chagenName(): void {
    if (this.name === this.initName) {
      this.name = 'Justin';
      return;
    }

    this.name = this.initName;
  }
  chagenAge(): void {
    if (this.age === this.initAge) {
      this.age = 24;
      return;
    }

    this.age = this.initAge;
  }
  //* No hacer estas pendejadas xD
  changedTitle(): void {
    let a = document.getElementById('titulo');
    if (a !== null) {
      this.title = a.innerHTML = 'Hola mundo';
    }
  }
}
