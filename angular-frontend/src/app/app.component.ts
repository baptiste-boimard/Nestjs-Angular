import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApiService } from './services/api.service';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  statusMessage: string = 'Chargement ...';
  data: any;
  dataUp: any;

  constructor(private apiService: ApiService) {}

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
        console.log(response);
        this.data = response
      },
      error: (err) => {
        this.data = {
          id: 123,
          title: 'Coucou',
          description: 'Coucou'
        }
      },
    })

    this.apiService.getExternalDataUp().subscribe({
      next: (response) => {
        this.dataUp = response
      },
      error: (err) => {
        this.dataUp = {
          id: 122312,
          title: 'Erreur',
          description: 'Erreur'
        }
      }
    })
  }
}
