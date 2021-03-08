import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VehiculeModule } from './vehicule.module';
import { VoitureComponent } from './voiture/voiture.component';
import { CamionComponent } from './camion/camion.component';

const routes: Routes = [
  { path: 'voiture', component: VoitureComponent },
  { path: 'camion', component: CamionComponent },
  { path: '', component: VoitureComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiculeRoutingModule { }
