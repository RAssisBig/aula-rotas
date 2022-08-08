import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  public name: string | undefined;
  private route: ActivatedRoute;

  constructor(route: ActivatedRoute) {
    this.route = route;
  }

  //Observer (Objeto consumidor), next, error, complete
  ngOnInit(): void {
    this.route.params.subscribe({
      next: (params) => { // Consumir os dados
        this.name = params["name"];
      },
      error: (error) => { // Caso tenha um erro
        console.error(error);
      },
      complete: () => { // Completar o ciclo de consumo
        console.log("Terminado!");
      }
    })
  }

}
