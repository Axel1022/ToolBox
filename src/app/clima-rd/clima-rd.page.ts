import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clima-rd',
  templateUrl: './clima-rd.page.html',
  styleUrls: ['./clima-rd.page.scss'],
})
export class ClimaRdPage implements OnInit {
  weather: any;
  private apiKey = '8c19a0c10671e0bfe7caf718c8f21462'; 
  private city = 'Santo Domingo';
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},DO&appid=${this.apiKey}&units=metric`;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadWeather();
  }

  loadWeather() {
    this.http.get<any>(this.apiUrl).subscribe((data) => {
      this.weather = data;
    });
  }
}
