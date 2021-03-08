/*
*******************
** App :: Module **
*******************
Ce fichier prend en charge tous les modules, composants, pipes, etc. nécessaires à l'App
*/

// ** Angular Core **
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { LayoutModule } from '@angular/cdk/layout';

// ** UIs **
// == Material
import { AngularMaterialModule } from './angular-material.module';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

// == Bootstrap

// == Ngx-Bootstrap
import { NgxBootstrapModule } from './ngx-bootstrap.module';

// ** Dev-coding **
// == Modules
import { AppRoutingModule } from './app-routing.module';
import { VehiculeModule } from './modules/vehicule/vehicule.module';
import { PersonneModule } from './modules/personne/personne.module';
import { EmployesModule } from './modules/employes/employes.module';

// == Composants
import { AppComponent } from './app.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { HomeComponent } from './composants/home/home.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateformComponent } from './composants/templateform/templateform.component';
import { CalcuetteComponent } from './composants/calcuette/calcuette.component';
import { ReactiveformComponent } from './composants/reactiveform/reactiveform.component';
import { CommentsformComponent } from './composants/commentsform/commentsform.component';
import { CommentsformcorrectionbsComponent } from './composants/commentsformcorrection-bs/commentsformcorrection-bs.component';
import { CommentsformcorrectionmaterialComponent } from './composants/commentsformcorrectionmaterial/commentsformcorrectionmaterial.component';
import { DragdropComponent } from './composants/materials/dragdrop/dragdrop.component';
import { DashboardComponent } from './composants/materials/dashboard/dashboard.component';
import { TableComponent } from './composants/materials/table/table.component';
import { NavigationComponent } from './composants/materials/navigation/navigation.component';
import { AddressFormComponent } from './composants/materials/address-form/address-form.component';
import { PereComponent } from './composants/interactions/pere/pere.component';
import { FilsComponent } from './composants/interactions/fils/fils.component';
import { ParentComponent } from './composants/interactions/parent/parent.component';
import { ChildComponent } from './composants/interactions/child/child.component';

// == Pipes
import { GetCharPipe } from './pipes/get-char.pipe';
import { GetArrayObjectPipe } from './pipes/get-array-object.pipe';

// == Autres
import { AuthComponent } from './auth/auth.component';
import { ObservableComponent } from './composants/rxjs/observable/observable.component';

@NgModule({
  declarations: [
    // ** Angular Core **
    // ** UIs **
    // == Material
    // == Bootstrap
    // == Ngx-Bootstrap
    // ** Dev-coding **
    // == Modules
    // == Composants
    AppComponent,
    AdresseComponent,
    StagiaireComponent,
    HomeComponent,
    ErrorComponent,
    TemplateformComponent,
    CalcuetteComponent,
    ReactiveformComponent,
    CommentsformComponent,
    CommentsformcorrectionbsComponent,
    CommentsformcorrectionmaterialComponent,
    DragdropComponent,
    DashboardComponent,
    TableComponent,
    NavigationComponent,
    AddressFormComponent,
    PereComponent,
    FilsComponent,
    ParentComponent,
    ChildComponent,
    // == Pipes
    GetCharPipe,
    GetArrayObjectPipe,
    // == Autres
    AuthComponent,
    ObservableComponent,
  ],
  imports: [
    // ** Angular Core **
    BrowserModule,
    BrowserAnimationsModule,
    DragDropModule,
    HttpClientModule,
    LayoutModule,
    // ** UIs **
    // == Material
    AngularMaterialModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    // == Bootstrap
    // == Ngx-Bootstrap
    NgxBootstrapModule,
    // ** Dev-coding **
    // == Modules
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    VehiculeModule,
    PersonneModule,
    EmployesModule,
    // == Composants
    // == Pipes
    // == Autres
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
