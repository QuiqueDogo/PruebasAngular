import { Component, inject } from '@angular/core';
import { ApiPokemonService } from '../../api-pokemon.service';
import { CardPokComponent } from '../../components/card-pok/card-pok.component';



@Component({
  selector: 'app-api-consume',
  standalone: true,
  imports: [CardPokComponent],
  templateUrl: './api-consume.component.html',
  styleUrl: './api-consume.component.css'
})
export class ApiConsumeComponent {
  joke:any= [];
  private apiService = inject(ApiPokemonService)
  ngOnInit(): void {
    this.apiService.getAllPokemon()
    .then(({data}) => {
       this.joke = data.results
    })
    .catch(error => console.log(error))
  }
}
