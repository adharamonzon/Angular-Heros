import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interface/interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html'
})
export class AddComponent implements OnInit {

  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC-Comics'
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel-Comics'
    }
  ];

  heroe : Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: ''
  }
  constructor( 
    private heroeService : HeroesService,
    private activatedRoute : ActivatedRoute,
    private router : Router
  ) { }

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      return;
    }
    
    this.activatedRoute.params
    .pipe(
      switchMap( ({id}) => this.heroeService.getHero(id))
    )
    .subscribe( heroe => this.heroe = heroe)
  }

  save(){
    if(this.heroe.superhero.trim().length === 0) {
      return;
    }
    if (this.heroe.id) {
      //actualizar heroe
      this.heroeService.updateHero(this.heroe)
        .subscribe( resp => {
          this.router.navigate(['/heroes/edit', resp.id])
        })
    } else {
      //crear heroe nuevo
      this.heroeService.addHero(this.heroe)
      .subscribe(resp =>{
        this.router.navigate(['/heroes/add', resp.id])
      })
    }
    

  }
}
