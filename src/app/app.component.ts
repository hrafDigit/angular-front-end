import { Component } from '@angular/core';
// import { Personne } from './classes/personne';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) { }

  isConnected() {
    if (Boolean(localStorage.getItem('isConnected'))) {
      return true;
    } else {
      return false;
    }
  }

  //Déconnexion global de l'App
  /*
  logout() {
    localStorage.removeItem('isConnected');
    this.router.navigate(['']);
  }
  */
  // OU encore mieux
  setLogOut() {
    if (localStorage.getItem('isConnected') === 'true') {
      localStorage.removeItem('isConnected');
      this.router.navigate(['/home']);
    }
  }
  /*
Suite à la création d'un composant 'home' – qui sert désormais de landing – 
il nous faut transférer tout le code depuis le fichier "app.component.ts" vers le fichier "home.component.ts" nouvellement mis en place ;
idem pour le "app.component.html" (!! SAUF la ligne <router-outlet></router-outlet> !!) vers le fichier "home.component.ts"
*/

  /*
  title = 'Angular Front-End';

  personne: Personne = new Personne(100, 'Wick', 'John');

  libelleFormation = 'POEC FRONT JS';

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
*/

}
