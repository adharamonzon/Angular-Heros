import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interface/interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styles: [`
    img{
      width: 100%;
      border-radius: 3px;
    }
  `]
})
export class HeroComponent implements OnInit {

  heroe!: Heroe;

  constructor(
    private activatedRoute : ActivatedRoute,
    private  heroService: HeroesService,
    private router : Router
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id}) => this.heroService.getHero(id))
    )
    .subscribe(resp => this.heroe = resp);

  }
  
  goBack() {
    this.router.navigate(['/heroes/list'])
  }
}
