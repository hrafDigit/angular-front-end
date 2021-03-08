import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Skill } from '../classes/skill';

@Component({
  selector: 'app-skill-component',
  templateUrl: './skill-component.component.html',
  styleUrls: ['./skill-component.component.css']
})
export class SkillComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // Le décorateur '@Input' permet à un composant "enfant" de récupérer les données de son composant "parent"
  // ne pas oublier de le déclarer dans le fichier nomFichierEnfant.html
  @Input() lastName!: string;
  @Input() firstName!: string;
  @Input() age!: number;
  @Input() sexe!: string;
  @Input() bio!: string;

}
