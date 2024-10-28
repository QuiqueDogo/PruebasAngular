import { Injectable } from "@angular/core";
import { ComponentStore } from '@ngrx/component-store';

export interface MoviesState {
    movies: [];
  }
  
  @Injectable()
  export class MoviesStore extends ComponentStore<MoviesState> {
    
    constructor() {
      super({movies: []});
    }
  }