import { Routes } from '@angular/router';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { ApiConsumeComponent } from './views/api-consume/api-consume.component';
import { PokemonListComponent } from './views/pokemon-list/pokemon-list.component';


export const routes: Routes = [
    {path: 'todo-list', component: TodoListComponent},
    {path: 'apiPokemon', component: ApiConsumeComponent},
    {path: 'pokemonList', component: PokemonListComponent},
];
