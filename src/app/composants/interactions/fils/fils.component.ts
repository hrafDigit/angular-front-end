import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-fils',
  templateUrl: './fils.component.html',
  styleUrls: ['./fils.component.css']
})
export class FilsComponent implements OnInit {

  // Le décorateur '@Input' permet à un composant "enfant" de récupérer les données de son composant "parent"
  // ne pas oublier de le déclarer dans le fichier nomFichierEnfant.html
  @Input() ordre!: string;
  @Input() villeNaissance!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
