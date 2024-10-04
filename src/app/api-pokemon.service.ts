import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ApiPokemonService {
  
  constructor() { 
  
  }

  getAllPokemon() {
    return axios.get('https://pokeapi.co/api/v2/pokemon/', {
    
    });
  }
  
}
