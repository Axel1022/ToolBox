import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-universidades-pais',
  templateUrl: './universidades-pais.page.html',
  styleUrls: ['./universidades-pais.page.scss'],
})
export class UniversidadesPaisPage implements OnInit {
  pais: string = '';
  universidades: any[] = [];

  constructor(private http: HttpClient) {}
  ngOnInit() {
    console.log();
  }
  buscarUniversidades() {
    const apiUrl = `http://universities.hipolabs.com/search?country=${encodeURIComponent(
      this.pais
    )}`;
    this.http.get<any[]>(apiUrl).subscribe(
      (data) => {
        this.universidades = data;
      },
      (error) => {
        console.error('Error al obtener universidades:', error);
      }
    );
  }
}
