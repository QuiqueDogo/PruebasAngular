import { Component, OnInit } from '@angular/core';
import { PokemonState } from '../../store/movies.store';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
  providers: [PokemonState]
})
export class PokemonListComponent implements OnInit{
  // pokemons$:any=  this.pokemonState.showPokemons$;
  pokemons$:any= '';
  
  
  constructor(private pokemonState: PokemonState ){
    this.pokemons$=  this.pokemonState.showPokemons$;
      
  }
  
  ngOnInit(): void {
    console.log(this.pokemons$)
  }
}
