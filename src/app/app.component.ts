import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Vista principal', url: '/vista-principal', icon: 'home' },
    {
      title: 'Predicción de género',
      url: '/prediccion-genero',
      icon: 'man',
    },
    { title: 'Predicción de edad', url: '/prediccion-edad', icon: 'calendar' },
    {
      title: 'Universidades por País',
      url: '/universidades-pais',
      icon: 'school',
    },
    {
      title: 'Clima en República Dominicana',
      url: '/clima-rd',
      icon: 'partly-sunny',
    },
    {
      title: 'Noticias de WordPress',
      url: '/noticias-wordpress',
      icon: 'newspaper',
    },
    {
      title: 'Acerca de',
      url: '/acerca-de',
      icon: 'information-circle',
    },
  ];
  constructor() {}
}
