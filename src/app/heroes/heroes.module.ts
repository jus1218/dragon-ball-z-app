import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListHeroComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [HeroComponent, ListHeroComponent],
  exports: [HeroComponent, ListHeroComponent],
  imports: [CommonModule],
})
export class HeroesModule {}
