import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { Observable } from 'rxjs';
import { ExternalData } from './model/ExternalData.model';
import { Store } from '@ngrx/store';
import * as ExternalDataActions from './store/external-data.actions';
import { selectExternalData, selectServiceBData } from './store/external-data.selectors'; // Sélecteurs pour lire l'état
import { CommonModule } from '@angular/common'; // Import de CommonModule pour le pipe async



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  statusMessage: string = 'Chargement ...';
  data: any[] = [];
  dataUp: any;
  externalDataFromStore$: Observable<ExternalData[]>;
  externalDataFromServiceB$: Observable<ExternalData[]>;

  constructor(
    private apiService: ApiService,
    private store: Store,
  ) {
    this.externalDataFromStore$ = this.store.select(selectExternalData);
    this.externalDataFromServiceB$ = this.store.select(selectServiceBData) ;
    this.externalDataFromServiceB$.subscribe((data) => {console.log('Data from Service B in Store:', data);
    });
  }

  ngOnInit(): void {
    this.apiService.getHello().subscribe({
      next: (response) => {
        this.statusMessage = response.message
      },
      error: (err) => {
        this.statusMessage = 'Erreur lors du chargement des données'
      },
    })

    this.apiService.getExternalData().subscribe({
      next: (response) => {
        console.log('response', response);
        this.data = response
      },
      error: (err) => {
        this.data = [{
          id: 123,
          title: 'Coucou',
          description: 'Coucou'
        }]
      },
    })

    // this.apiService.getExternalDataUp().subscribe({
    //   next: (response) => {
    //     this.dataUp = response
    //   },
    //   error: (err) => {
    //     this.dataUp = {
    //       id: 122312,
    //       title: 'Erreur',
    //       description: 'Erreur'
    //     }
    //   }
    // })

    this.store.dispatch(ExternalDataActions.loadExternalData());

    this.store.dispatch(ExternalDataActions.loadDataFromServiceB())
    
  }
}
