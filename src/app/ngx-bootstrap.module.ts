import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertModule } from 'ngx-bootstrap/alert';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

// Modal window help
// https://stackoverflow.com/questions/64392594/how-to-open-a-bootstrap-modal-window-from-other-component-in-angular-8

const modules: any[] = [
  CommonModule,
  AlertModule,
  TooltipModule,
  BsDropdownModule,
  BsDropdownModule.forRoot(),
  ModalModule,
  ModalModule.forRoot(),
];
@NgModule({
  imports: [ ...modules ],
  exports: [ ...modules ]
})
export class NgxBootstrapModule {}
