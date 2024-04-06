import { Component } from '@angular/core';
import { Tarea } from './interfaces/Tarea';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  todos: Tarea[] = [];
  tarea = '';
  responsable = '';

  addTask() {
    const nuevaTarea: Tarea = {
      tarea: this.tarea,
      completado: false,
      responsable: this.responsable,
    };
    this.todos.push(nuevaTarea);
  }
}
