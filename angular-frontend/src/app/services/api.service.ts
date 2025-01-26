import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private readonly apiUrl = 'http://localhost:3000/api'; // Grâce au proxy, cette URL pointe vers l'API Gateway

  constructor(private http: HttpClient) {}
  // constructor() {}
  getHello(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hello`);
  }
  // getHello(): Observable<{message: string}> {
  //   return of({ message: 'Hello'})
  // }
}
