import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // A l'appel d'un chemin erroné ex.http://localhost:4200/unMotInexistantDansLeSiteMap
    // renvoi vers une page d'erreur : '/error'
  }

}
