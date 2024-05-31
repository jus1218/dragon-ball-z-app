import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template:`
<h1>{{ title }}</h1>
<hr />
<p>Counter: {{ counter }}</p>
<button (click)="increseBy(+1)">+1</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increseBy(-1)">-1</button>
  `,
  // styleUrls: ['./counter.component.scss']
})
export class CounterComponent
{
  public title: string = 'Mi Primera App';
  private readonly  initCounter:number = 10;
  public counter: number;
  constructor() {
    this.counter = this.initCounter;
  }

  increseBy(value:number): void {
    this.counter += value;
  }

  resetCounter():void{
    this.counter = this.initCounter;
  }

  // ngOnInit(): void { }
}


// import { Component } from "@angular/core";

// @Component({
//   selector:'app-counter',
//   template:'<h1>Hola Justin</h1>',

// })
// export class CounterComponent{


// }



// <h1>{{title}}</h1>
//   <hr />
//   <p> Counter: {{counter}}</p>
//   <button (click)="increseBy(+1)">+1</button>
//   <button (click)="resetCounter()">Reset</button>
//   <button (click)=" increseBy(-1)">-1</button>
