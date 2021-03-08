import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployesRoutingModule } from './employes-routing.module';
import { EmployesListComponent } from './employes-list/employes-list.component';
import { EmployesSelectComponent } from './employes-select/employes-select.component';
import { EmployesUpdateComponent } from './employes-update/employes-update.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ EmployesListComponent, EmployesSelectComponent, EmployesUpdateComponent ],
  imports: [
    CommonModule,
    EmployesRoutingModule,
    HttpClientModule,
    FormsModule,
  ]
})
export class EmployesModule {

  constructor() {
    console.log('app-module');
  }

}
