import { Component, Input } from '@angular/core';
import { Tarea } from './interfaces/Tarea';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Input()
  public todos: Tarea[] = [];
  tarea = '';
  responsable = '';
  deletedItem: Tarea[] = [];
  completado = false;

  addTask() {
    const nuevaTarea: Tarea = {
      tarea: this.tarea,
      completado: false,
      responsable: this.responsable,
    };
    this.todos.push(nuevaTarea);
  }
  deleteTask(index: number) {
    this.todos[index].completado = true;
  }
}
