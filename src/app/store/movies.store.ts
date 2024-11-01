import { Injectable } from "@angular/core";
import { ComponentStore } from '@ngrx/component-store';
import { catchError, EMPTY, switchMap, tap } from "rxjs";
import { PokemonService } from "../services/pokemons.service";


 interface MoviesState {
  pokemons: (object | void)[];
}
 interface Movie {
  movie: string;
}

@Injectable()
export class PokemonState extends ComponentStore<MoviesState> {

  constructor(
    private pokemonService: PokemonService
    
  ) {
    super({ pokemons: [] });
  }
  readonly addPokemon = this.updater((state, movie) => ({
    pokemons: [...state.pokemons, movie],
  }));

  // readonly setContacts = this.updater((state, pokemon: any) => ({
  //   ...state,
  //   pokemon,
  // }));


  // readonly fetchPokemons = this.effect((trigger$) =>
  //   trigger$.pipe(
  //     switchMap(() =>
  //       this.pokemonService.fetchPokemon().pipe(
  //         tap((contacts: any) => {
  //           this.addPokemon(contacts);
  //         }),
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   )
  // );
}