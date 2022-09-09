import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
// modulos
import { HeroesRoutingModule } from './heroes-routing.module';
//componentes
import { ListComponent } from './pages/list/list.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { ImagePipe } from './pipes/image.pipe';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
//pipes

@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    HeroeCardComponent,
    HeroComponent,
    HomeComponent,
    SearchComponent,
    ImagePipe,
    ConfirmationComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule
  ]
})
export class HeroesModule { }
