import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { ExternalData } from '../model/ExternalData.model';
import { tap, catchError  } from 'rxjs/operators';
import { throwError } from 'rxjs';



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
    return this.http.get<ExternalData>(`${this.apiUrl}/external-data/first`)
  }

  getExternalDataUp(): Observable<any> {
    return this.http.get<ExternalData[]>(`${this.apiUrl}/external-data/second`).pipe(
      tap(data => console.log('Data from API:', data)), // Log les données de l'API
      catchError(error => {
        console.error('Erreur lors de la récupération des données :', error);
        return throwError(() => new Error('Une erreur est survenue lors de la récupération des données.'));
      })
    );
  }
}
