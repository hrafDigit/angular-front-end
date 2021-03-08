import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TemplateformComponent } from '../composants/templateform/templateform.component';

@Injectable({
  providedIn: 'root'
})

  // CanDeactivate attend en paramètre un component – ici on choisit 'templateform' pour l'exemple – c'est pourquoi on rajoute "<TemplateformComponent>" après 'CanDeactivate'
  // Dès que l'utilisateur arrête une action ou cesse de remplir le formulaire, on affiche un message
  export class LeaveGuard implements CanDeactivate<TemplateformComponent> {
  canDeactivate(
    component: TemplateformComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): boolean {
    return component.personne.nom === undefined ||
            component.personne.prenom === undefined ||
            component.personne.nom.length === 0 ||
            component.personne.prenom .length === 0 ||
            confirm('Voulez-vous vraiment quitter le formulaire');
  }
}
