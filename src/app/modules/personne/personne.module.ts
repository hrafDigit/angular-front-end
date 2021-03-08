import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonneRoutingModule } from './personne-routing.module';
import { PersonnesListComponent } from 'src/app/composants/personne/personnes-list/personnes-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { UpdatePersonneComponent } from './update-personne/update-personne.component';
import { SelectPersonneComponent } from './select-personne/select-personne.component';


@NgModule({
  declarations: [ PersonnesListComponent, UpdatePersonneComponent, SelectPersonneComponent ],
  imports: [
    CommonModule,
    PersonneRoutingModule,
    HttpClientModule,
    FormsModule
  ]
})
export class PersonneModule {

  constructor() {
    console.log('app-module');
  }

}
