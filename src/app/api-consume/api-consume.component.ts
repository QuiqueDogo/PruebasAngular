import { Component } from '@angular/core';
import { ApiPokemonService } from '../api-pokemon.service';

@Component({
  selector: 'app-api-consume',
  standalone: true,
  imports: [],
  templateUrl: './api-consume.component.html',
  styleUrl: './api-consume.component.css'
})
export class ApiConsumeComponent {
  joke= '';
  constructor(private apiService: ApiPokemonService) { }
  ngOnInit(): void {
    this.apiService.getAllPokemon()
    .then(({data}) => {
       this.joke = data
    })
    .catch(error => console.log(error))
  }
}
