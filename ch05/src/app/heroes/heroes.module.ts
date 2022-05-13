import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroListComponent } from './hero-list';
import { FavoriteHeroesComponent } from './favorite-heroes';
import { HeroDetailComponent } from './hero-detail';

@NgModule({
  declarations: [HeroListComponent, FavoriteHeroesComponent, HeroDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [HeroListComponent]
})
export class HeroesModule { }
