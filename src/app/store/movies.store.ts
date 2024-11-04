import { Injectable } from "@angular/core";
import { ComponentStore } from '@ngrx/component-store';
import { catchError, concatMap, EMPTY, Observable, switchMap, tap } from "rxjs";
import { PokemonService } from "../services/pokemons.service";

interface PokemonList {

}
 interface MoviesState {
  pokemons: object ;
}
 interface Movie {
  movie: string;
}

@Injectable()
export class PokemonState extends ComponentStore<any> {

  constructor(
    private pokemonService: PokemonService
    
  ) {
    super({ pokemons: [] });
    this.fetchPokemons();
  }

  readonly setPokemons = this.updater((state, pokemons: any) => ({
    ...state,
    pokemons,
  }));


  readonly fetchPokemons = this.effect((trigger$) =>
    trigger$.pipe(
      switchMap(() =>
        this.pokemonService.fetchPokemon().pipe(
          tap((pokemons: any) => {
            this.setPokemons(pokemons);
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );
  showPokemons$ = this.select(() => ['auqi'])

  readonly addPokemon = this.effect((contact$: Observable<Object>) =>
    contact$.pipe(
      concatMap((contact) =>
        this.pokemonService.addPokemon(contact).pipe(
          tap(() => this.fetchPokemons()),
          catchError(() => EMPTY)
        )
      )
    )
  );

  // readonly showPokemons$: Observable<Object> = this.select(
  //   ( pokemons) => pokemons
  // );
  
}