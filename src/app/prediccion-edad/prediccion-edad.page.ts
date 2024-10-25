import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';

@Component({
  selector: 'app-prediccion-edad',
  templateUrl: './prediccion-edad.page.html',
  styleUrls: ['./prediccion-edad.page.scss'],
})
export class PrediccionEdadPage implements OnInit {
  nombre: string = '';
  resultado: any = {};

  constructor(private http: HttpClient) {}
  ngOnInit() {
    console.log();
  }

  predecirEdad() {
    if (!this.nombre) {
      alert('Por favor, ingresa un nombre.');
      return;
    }
    this.http.get(`https://api.agify.io/?name=${this.nombre}`).subscribe(
      (res: any) => {
        this.resultado = {
          count: res.count,
          name: res.name,
          age: res.age,
        };
        console.log('Resultado de la predicción de edad:', this.resultado);
      },
      (error) => {
        console.error('Error al obtener datos de la API:', error);
      }
    );
    // Gary Alexander CAmpusano Paredes
    // 2022-1022
  }
}
