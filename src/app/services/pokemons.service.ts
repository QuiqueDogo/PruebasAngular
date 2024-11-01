import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';
interface Contact {
    name: string;
    phone: string;
}

@Injectable({
    providedIn: 'root',
})

export class PokemonService {
    pokemon:any = []
    constructor() { };

    fetchPokemon(): Observable<any> {
        return of(this.pokemon).pipe(delay(1000));
    }
    addPokemon(newContact: any): Observable<any> {
        this.pokemon.unshift(newContact);
        return of(newContact).pipe(delay(1000));
    }
}

