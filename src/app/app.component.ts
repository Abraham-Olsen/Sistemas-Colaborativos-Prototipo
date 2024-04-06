import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ToDoAndMore';
  todos: tarea[] = []; // Define the type of the todos array as an array of tarea objects
  tarea = '';
  responsable = '';

  addTask() {
    let nuevaTarea = new tarea(this.tarea, this.responsable);
    this.todos.push(nuevaTarea);
  }
}

export class tarea {
  public tarea: string;
  public completado: boolean;
  public responsable: string;

  constructor(detalle: string, responsable: string) {
    this.tarea = detalle;
    this.completado = false;
    this.responsable = responsable;
  }
}
