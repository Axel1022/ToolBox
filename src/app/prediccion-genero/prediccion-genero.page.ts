import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-prediccion-genero',
  templateUrl: './prediccion-genero.page.html',
  styleUrls: ['./prediccion-genero.page.scss'],
})
export class PrediccionGeneroPage implements OnInit {
  resultado: any = {};
  nombre: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    console.log();
  }

  predecirGenero() {

    this.http
      .get<any>(`https://api.genderize.io/?name=${this.nombre}`)
      .subscribe((res) => {
        this.resultado = {
          count: res.count,
          name: res.name,
          gender: res.gender,
          probability: res.probability,
        };
      });
  }
}
