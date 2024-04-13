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
  horaDeInicio = '';
  fecha = '';
  observaciones: string;
  constructor() {
    this.observaciones = '';
  }

  addTask() {
    const nuevaTarea: Tarea = {
      tarea: this.tarea,
      completado: false,
      responsable: this.responsable,
      horaDeInicio: (this.horaDeInicio = new Date().toLocaleTimeString()),
      horaDeFin: '',
      fechaDeInicio: (this.fecha = new Date().toLocaleDateString()),
      fechaDeFin: '',
      Observaciones: this.observaciones,
    };
    this.todos.push(nuevaTarea);
  }
  deleteTask(index: number) {
    this.todos[index].completado = true;
    this.todos[index].horaDeFin = new Date().toLocaleTimeString();
    this.todos[index].fechaDeFin = new Date().toLocaleDateString();
    this.todos[index].Observaciones = this.observaciones;
  }
}
