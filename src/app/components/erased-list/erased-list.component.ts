import { Component, Input } from '@angular/core';
import { Tarea } from '../list/interfaces/Tarea';

@Component({
  selector: 'app-erased-list',
  templateUrl: './erased-list.component.html',
  styleUrl: './erased-list.component.css',
})
export class ErasedListComponent {
  @Input()
  tareas: Tarea[] = [];
}
