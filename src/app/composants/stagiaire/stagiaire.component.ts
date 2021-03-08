import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})

  /*
  // Pour effectuer des requêtes, on dispose de 2 possibilités :
  – A•• /chemin/nom/prenom           -> à utiliser pour la "navigation" ; le chemin d'une URL qui va afficher un article par exemple (ex. https://www.domain.tld/actualités/infodujour.html)
  – B•• /chemin?nom=Wick&prenom=John -> à utiliser pour traiter une liste par exemple (liste qui est souvent filtrée si elle provient d'une API ou devra être filtrée)

  // Pour récupérer les valeurs de la requête :
  – pour A•• : on utilise, 'paramMap'
  – pour B•• : on utilise, 'queryParamMap'

  // Pourquoi faire des requêtes ici ?... afin d'éviter la déclarations de tous les paramètres en statique au lancement de l'App.
  C'est pourquoi, on se sert des injections de dépendances qui sont placées dans un constructeur
  Ex. constructor(  private route : ActivatedRoute ){...}
  */

export class StagiaireComponent implements OnInit {
  /*
  // Ici, on utilise un type spécifique à Angular 'any',
  'any' est une sorte de type fourre-tout, mais...
  !! ATTENTION !! Ok en dév. mais pas en production
  */

  nom: any;
  prenom: any;

  /*
  // En Javascript, un constructeur est une fonction qui sert à initialiser les attributs d'une classe
  !! MAIS avec Angular, un constructeur sert UNIQUEMENT à faire des injections de dépendances !!
  */
  constructor(  private route : ActivatedRoute ) { }

  // 'ngOnInit(): void {...}' : Méthode exécutée lorsque Angular a terminé l'initialisation du composant
  // mise-en-place par Angular lors de la création d'un component ; instancié à 'void' par défaut (!! ne pas y toucher !!)
  ngOnInit(): void {

    // DEUX OPTIONS pour retourner les paramètres :
    // 1. == 'Snapchot' avec 'params' ==
    // S'utilise si la valeur ne risque pas de changer

    // A l'appel de l'URL http://localhost:4200/stagiaire/jean/baton
    // this.nom = this.route.snapshot.params.nom;
    // this.nom = this.route.snapshot.params.prenom;
    // console.log(this.nom + ' ' + this.prenom);

    // A l'appel de l'URL http://localhost:4200/stagiaire?nom=Wick&prenom=John
    // this.nom = this.route.snapshot.queryParams.nom;
    // this.nom = this.route.snapshot.queryParams.prenom;
    // console.log(this.nom + ' ' + this.prenom);

    // 1. == 'Observable' avec 'param' pour une exécution asynchrone ==
    // S'utilise si la valeur risque de changer – ex. comme pour un ID –
    /*
    // Concept :: Les 'observales' xxx ce qu'on appelle de la Programmation réactive.
    Les 'observales' émettent des événements qui sont interceptés par des observateurs ; ceux-ci souscrivent 'subscribe' à l'observable, l'analyse avant de retourner un résultat

    // 'Subscribe' prend en paramètre l'observateur – une simple fonction – qui recevra les valeurs émises par l'observable
    // Dans notre cas : La route est un observable qui émet un chemin ; le chemin est un événement qui est observé par un ou plusieurs observateurs comme 'nom' et 'prenom' ; les observateurs retournent un résultat
    */

    this.route.paramMap.subscribe(res => {
      this.nom = res.get('nom');
      this.prenom = res.get('prenom');
      console.log(this.nom + ' ' + this.prenom);
    });

  }

}
