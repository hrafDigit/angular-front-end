/*
****************************
** Routing :: App mapping **
****************************
Ce fichier prend en charge le mapping soit le chemin des composants
*/

//  ** Composants :: Angular Core **
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// ** Composants :: UIs **
// == Material
import { DashboardComponent } from './composants/materials/dashboard/dashboard.component';
import { NavigationComponent } from './composants/materials/navigation/navigation.component';
import { TableComponent } from './composants/materials/table/table.component';
import { DragdropComponent } from './composants/materials/dragdrop/dragdrop.component';

// == Bootstrap

//  ** Composants :: Dev-coding **
import { HomeComponent } from './composants/home/home.component';
import { ErrorComponent } from './composants/error/error.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { TemplateformComponent } from './composants/templateform/templateform.component';
import { CalcuetteComponent } from './composants/calcuette/calcuette.component';
import { ReactiveformComponent } from './composants/reactiveform/reactiveform.component';
import { CommentsformComponent } from './composants/commentsform/commentsform.component';
import { CommentsformcorrectionbsComponent } from './composants/commentsformcorrection-bs/commentsformcorrection-bs.component';
import { CommentsformcorrectionmaterialComponent } from './composants/commentsformcorrectionmaterial/commentsformcorrectionmaterial.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthComponent } from './auth/auth.component';
import { LeaveGuard } from './guards/leave.guard';
import { PereComponent } from './composants/interactions/pere/pere.component';
import { FilsComponent } from './composants/interactions/fils/fils.component';
import { ParentComponent } from './composants/interactions/parent/parent.component';
import { ChildComponent } from './composants/interactions/child/child.component';
import { DeveloperComponentComponent } from './composants/TPs/developer-component/developer-component.component';
import { SkillComponentComponent } from './composants/TPs/skill-component/skill-component.component';
import { ObservableComponent } from './composants/rxjs/observable/observable.component';

// const routes: Routes = []; <= déclaration de routes par défaut

/*
¶ Ici, déclaration d'un tableau de routes appelées dans le module principal

¶ NOTE : ' redirectTO : "/home" ' ; nous utilisons cette propriété dans le tableau routes
pour indiquer au service de routage si les utilisateurs naviguent vers l'URL vide,
ils doivent être redirigés vers l'URL d'accueil plutôt que vers l'URL vide.

¶ NOTE : " pathMatch: 'full' " ; cette propriété commande à Angular qu'une URL vide doit
correspondre au chemin de chaîne exact et non une chaîne partiellement vide.
*/
const routes: Routes = [
  { path: 'dragdrop', component: DragdropComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'navigation', component: NavigationComponent },
  // { path: 'tooltip', component: TooltipComponent },
  // { path: 'modal', component: ModalComponent },
  // { path: 'dropdown', component: DropdownComponent },

  { path: 'home', component: HomeComponent },
  { path: 'stagiaire', component: StagiaireComponent },
  { path: 'stagiaire/:nom/:prenom', component: StagiaireComponent },
  // { path: 'adresse', component: AdresseComponent },
  { path: 'adresse', component: AdresseComponent, canActivate: [AuthGuard] },
  // { path: 'templateform', component: TemplateformComponent },
  { path: 'templateform', component: TemplateformComponent, canDeactivate: [LeaveGuard] },
  { path: 'calculette', component: CalcuetteComponent },
  { path: 'reactiveform', component: ReactiveformComponent },
  { path: 'commentsform', component: CommentsformComponent },
  { path: 'commentsformcorrection-bs', component: CommentsformcorrectionbsComponent },
  { path: 'commentsformcorrectionmaterial', component: CommentsformcorrectionmaterialComponent },
  { path: 'Table', component: TableComponent },
  { path: 'error', component: ErrorComponent },
  { path: 'auth', component: AuthComponent },
  { path: 'pere', component: PereComponent },
  { path: 'fils', component: FilsComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },
  { path: 'developer-component', component: DeveloperComponentComponent },
  { path: 'skill-component', component: SkillComponentComponent },
  { path: 'observable', component: ObservableComponent },

  // lazy loading
  // { path: 'vehicule', loadChildren: './modules/vehicule.module#VehiculeModule' },
  // { path: 'personne', loadChildren: './modules/personne.module#PersonneModule' },
  { path: 'vehicule', loadChildren: './modules/vehicule/vehicule.module#VehiculeModule' },
  { path: 'personne', loadChildren: './modules/personne/personne.module#PersonneModule' },
  { path: 'employe', loadChildren: './modules/employes/employes.module#EmployesModule' },

  // Par convention on place, le 'redirectTo' à la fin
  // son chemin est une string vide qui va permettre de faire une redirection vers la homePage
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  // le dernier chemin doit être celui de l'erreur | ** signifie toute saisie incorrecte dans l'URL
  { path: '**', redirectTo: '/error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

  export class AppRoutingModule { }
