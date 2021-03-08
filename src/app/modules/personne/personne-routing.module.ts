import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonnesListComponent } from 'src/app/composants/personne/personnes-list/personnes-list.component';
import { SelectPersonneComponent } from './select-personne/select-personne.component';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';

const routes: Routes = [
  { path: 'personnes-list', component: PersonnesListComponent },
  { path: 'update/:id', component: UpdatePersonneComponent },
  { path: 'select/:id', component: SelectPersonneComponent },
  { path: '', component: PersonnesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneRoutingModule { }
