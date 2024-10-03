import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css',
  
})
export class TodoListComponent {
  tasks = [
    { id: 1, title: 'Task 1', completed: false },
    { id: 2, title: 'Task 2', completed: true },
    { id: 3, title: 'Task 3', completed: false },
  ];
  taskTitle = '';
  eraseTask(id: Number){
    this.tasks = this.tasks.filter(task => task.id!== id);
  }
  completedTask(id: Number){
    this.tasks = this.tasks.map(task => task.id === id? {...task, completed:!task.completed} : task);
  }
  updateTitle(newTitle: string) {
    let newTask = {
      id: Date.now(),
      title: newTitle,
      completed: false
    }
    this.tasks = [...this.tasks, newTask];
  }
}
