import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { EmployesSelectComponent } from './employes-select/employes-select.component';
import { EmployesUpdateComponent } from './employes-update/employes-update.component';

const routes: Routes = [
  { path: 'employes-list', component: EmployesListComponent },
  { path: 'select/:id', component: EmployesSelectComponent },
  { path: 'update/:id', component: EmployesUpdateComponent },
  { path: '', component: EmployesListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployesRoutingModule { }
