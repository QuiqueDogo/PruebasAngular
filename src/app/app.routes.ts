import { Routes } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ApiConsumeComponent } from './api-consume/api-consume.component';


export const routes: Routes = [
    {path: 'todo-list', component: TodoListComponent},
    {path: 'apiPokemon', component: ApiConsumeComponent},
];
