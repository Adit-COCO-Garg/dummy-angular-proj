import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apKey: string = '072ed941d16c4d8b9711f66ac646632f';
  private apiUrl: string = `https://newsapi.org/v2/top-headlines?apiKey=${this.apKey}&country=us`;

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get(this.apiUrl)
  }
}
