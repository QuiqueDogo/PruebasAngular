import { Component, inject } from '@angular/core';
import { ApiPokemonService } from '../../api-pokemon.service';
import { CardPokComponent } from '../../components/card-pok/card-pok.component';
import { ComponentStore } from '@ngrx/component-store';

interface PokemonState {
  pokemons: (object | void)[];
}

@Component({
  selector: 'app-api-consume',
  standalone: true,
  imports: [CardPokComponent],
  templateUrl: './api-consume.component.html',
  styleUrl: './api-consume.component.css',
  providers: [ComponentStore]

})
export class ApiConsumeComponent {
  joke:any= [];
  // constructor(
  //   private readonly componentStore: ComponentStore<PokemonState>
  // ) {}
  
  private apiService = inject(ApiPokemonService)
  ngOnInit(): void {
    // this.componentStore.setState({pokemons: []});
    this.apiService.getAllPokemon()
    .then(({data}) => {
       this.joke = data.results
    })
    .catch(error => console.log(error))
  }
}
