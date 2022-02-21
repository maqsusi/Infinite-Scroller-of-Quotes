import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  constructor(private http: HttpClient) {}

  getQuotes(page: number, limit: number): Observable<any> {
    return this.http.get(
      `https://api.javascripttutorial.net/v1/quotes/?page=${page}&limit=${limit}`
    );
  }
}
