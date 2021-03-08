import { Component, OnInit, TemplateRef } from '@angular/core';
import { Personne } from '../../classes/personne';

import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // constructor() { }
  constructor( public modalService: BsModalService ) { }
  ngOnInit(): void { }

  title = 'Angular Front-End';

  // Création d'une classe 'personne'
  personne: Personne = new Personne(100, 'Wick', 'John');

  // Création
  libelleFormation = 'POEC FRONT JS';

  // Création
  nom = 'Doe';
  couleur = 'greenyellow';

  // Création d'un tableau de type 'number' (i.e. selon le modèle de la classe déclarée ci-dessus)
  tabFibonacci:number[] = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987];
  tabSyracuse:number[] = [14, 7, 22, 11, 34, 17, 52, 26, 13, 40, 20, 10, 5, 16, 8, 4, 2, 1];
  tab:number[] = [3, 2, 6, 5, 11, 14, 18, 13];

  // Création d'un tableau de type 'personne' (i.e. selon le modèle de la classe déclarée ci-dessus)
  personnes: Array<Personne> = [
    new Personne(100, 'de Cool', 'Delphine'),
    new Personne(101, 'Degas', 'Edgar'),
    new Personne(102, 'Monet', 'Claude'),
    new Personne(103, 'Jean', 'Dubuffet'),
  ];

  direBonjour() {
    return 'Bonjour Angular';
  }

  getColor() {
  return 'white';
  }

  getBackgroundColor() {
  return 'red';
  }

  // Modal avec Bootstrap + ngx-Bootstrap
  modalRef!: BsModalRef;
  openModal( template: TemplateRef<any> ) {
    this.modalRef = this.modalService.show(template);
  }

}
