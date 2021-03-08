import { Component, OnInit, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { FilsComponent, } from '../fils/fils.component';

@Component({
  selector: 'app-pere',
  templateUrl: './pere.component.html',
  styleUrls: ['./pere.component.css']
})
export class PereComponent implements OnInit, AfterViewInit {

  tab: Array<string> = ['premier', 'deuxième', 'troisème'];
  nord='Lille';
  sud='Nice';
  capitale='Paris'

    // Le décorateur '@ViewChild' permet à un composant "parent" de récupérer les données d'un composant "enfant"
    // ne pas oublier de le déclarer la méthode en dessous w/ 'ngAfterViewInit'
  @ViewChild(FilsComponent, { static: false}) fils!: FilsComponent;

    // Le décorateur '@ViewChildren' permet à un composant "parent" de récupérer les données de TOUS les composants "enfant"
    // ne pas oublier de le déclarer la méthode en dessous w/ 'ngAfterViewInit'
    @ViewChildren(FilsComponent) enfants!: QueryList<FilsComponent>;

  ngAfterViewInit(): void {
    // affichage du premier enfant en console
    console.log(this.fils.ordre);

    // affichage tous les enfants i.e. deFilsComponent en console
    this.enfants.forEach(elt => console.log(elt));

  }

  constructor() { }

  ngOnInit(): void {
  }

}
