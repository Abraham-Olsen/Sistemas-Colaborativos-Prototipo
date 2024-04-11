import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  public time: string = new Date().toLocaleTimeString();
  public date: string = new Date().toLocaleDateString();
  public day: string = new Date().toLocaleDateString('es-ES', {
    weekday: 'long',
  });
  public month: string = new Date().toLocaleDateString('es-ES', {});
  public year: string = new Date().toLocaleDateString('es-ES', {});

  ngOnInit() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }
}
