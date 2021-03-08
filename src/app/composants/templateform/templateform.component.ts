import { Component, OnInit } from '@angular/core';
import { Personne } from '../../interface/personne';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  // !! CAS FORMULAIRE code "simple" !!

  // result = "";
  // direBonjour(nom:string);
  // this.result = nom;

  // nom = "";

  personnes: Array<Personne> = [];
  personne: Personne = {};

  ajouterPersonne() {
    this.personnes.push({ ...this.personne });
    this.personne.nom = '';
    this.personne.prenom = '';
    console.log(this.personne);
  }
  supprimerPersonne(personne: Personne) {
    const index: number = this.personnes.indexOf(personne);
    this.personnes.splice(index, 1);
  }



  constructor() { }

  ngOnInit(): void {

  }

}
