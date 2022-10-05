import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/inicio', icon: 'apps' },
    { title: 'Sumadora', url: '/sumadora', icon: 'add' },
    { title: 'Traductor', url: '/traductor', icon: 'language' },
    { title: 'Tabla', url: '/tabla', icon: 'calculator' },
    { title: 'Video Explicativo', url: '/video', icon: 'videocam' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
