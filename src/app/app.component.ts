import { Component } from '@angular/core';
import { Tarea } from './components/list/interfaces/Tarea';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ToDoAndMore';
  tareas: Tarea[] = [];
  tarea = '';
  responsable = '';
}
