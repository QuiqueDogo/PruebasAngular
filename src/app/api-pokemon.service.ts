import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {

  getAllPokemon() {
    return axios.get('https://pokeapi.co/api/v2/pokemon/', {   
    });
  }
  getUniquePokemon(element:any) {
    return axios.get(`${element}`, {   
    });
  }
  
}
