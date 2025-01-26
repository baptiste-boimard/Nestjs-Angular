import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  statusMessage: string = 'Chargement ...';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    console.log('AppComponent initialisé');
    this.apiService.getHello().subscribe({
      next: (response) => {
        console.log('Réponse reçue du service :', response);
        this.statusMessage = response.message
      },
      error: (err) => {
        console.error('Erreur lors de l’appel à l’API :', err);
        this.statusMessage = 'Erreur lors du chargement des données'
      },
    })
  }
}
