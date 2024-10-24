import { Component, inject, Input } from '@angular/core';
import { ApiPokemonService } from '../../api-pokemon.service';

@Component({
  selector: 'app-card-pok',
  standalone: true,
  imports: [],
  templateUrl: './card-pok.component.html',
  styleUrl: './card-pok.component.css'
})
export class CardPokComponent {
  elements:any = [];
  private apiService = inject(ApiPokemonService)
  @Input() valueNew:any = [];
  @Input() name:string = '';
  ngOnInit(): void {
    this.apiService.getUniquePokemon(this.valueNew)
    .then(({data}) => {
      this.elements = data
   })
   .catch(error => console.log(error))
  }
}
