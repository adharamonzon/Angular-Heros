import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interface/interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  term : string = '';
  heroes : Heroe[] = [];
  selectedHero! : Heroe | undefined;
  constructor(private heroesService : HeroesService) { }

  ngOnInit(): void {
  }
  
  search(){
    this.heroesService.getSuggestions(this.term.trim())
      .subscribe(heroes => this.heroes = heroes)
  }

  optionSelected(ev:MatAutocompleteSelectedEvent) {
    if (!ev.option.value) {
      this.selectedHero = undefined;
      return;
    }
    const heroe : Heroe = ev.option.value;
    this.term = heroe.superhero;
    this.heroesService.getHero(heroe.id!)
      .subscribe(heroe => this.selectedHero = heroe)
  }
}
