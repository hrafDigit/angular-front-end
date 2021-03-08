import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent implements OnInit {

  personnes:any = [];

  personneForm = this.fb.group({
    id : [null, [Validators.required]],
    nom : ['', [Validators.required, this.checkInputValidator]],
    prenom : ['', [Validators.required, this.checkInputValidator]],
    adresse: this.fb.group({
      rue : [''],
      ville : [''],
      codePostal : ['']
    }),
    sports : this.fb.array([
      //this.fb.control('')
    ])
  });

  checkInputValidator(control : FormControl){
    const str:string = control.value;
    if (str[0] >= 'A' && str[0] <= 'Z'){
      return null;
    } else {
      return { error: 'Entrée non valide'}
    }
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.personneForm.setValue({nom : 'Doe', prenom : 'John', id : 1});
  }

  afficherTout(){
    this.personnes.push({​​ ...this.personneForm.value }​​);
    console.log(this.personneForm.value);// C'est la valeur
    console.log(this.personneForm.controls.nom); //C'est l'objet nom
    console.log(this.personneForm.get('nom'));
    this.personneForm.reset();
  }

  get id(){
    return this.personneForm.get('id')
  }
  get nom(){
    return this.personneForm.get('nom')
  }
  get prenom(){
    return this.personneForm.get('prenom')
  }

  get sports(){
    return this.personneForm.get('sports') as FormArray
  }
  ajouterSport(){
    this.sports.push(this.fb.control(''));
  }
  supprimerSport(i : number){
    this.sports.removeAt(i);
  }

}
