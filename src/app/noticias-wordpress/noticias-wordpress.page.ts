import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-noticias-wordpress',
  templateUrl: './noticias-wordpress.page.html',
  styleUrls: ['./noticias-wordpress.page.scss'],
})
export class NoticiasWordpressPage implements OnInit {
  news: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getLatestNews();
  }

  getLatestNews() {
    const apiURL = 'https://wptavern.com/wp-json/wp/v2/posts';
    this.http.get(apiURL).subscribe((data: any) => {
      this.news = data.slice(0, 3); // Tomar las 3 últimas noticias
    });
  }
}
