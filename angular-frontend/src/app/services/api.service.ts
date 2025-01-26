import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl = 'http://localhost:3000/api';
  // private readonly apiUrlServiceB = 'http://localhost:4000/data';

  constructor(private http: HttpClient) {}

  getHello(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hello`);
  }

  getExternalData(): Observable<any> {    
    return this.http.get(`${this.apiUrl}/external-data/first`)
  }

  getExternalDataUp(): Observable<any> {
    return this.http.get(`${this.apiUrl}/external-data/second`)
  }
}
