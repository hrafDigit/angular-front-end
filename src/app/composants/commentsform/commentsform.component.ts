import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray} from '@angular/forms';

@Component({
  selector: 'app-commentsform',
  templateUrl: './commentsform.component.html',
  styleUrls: ['./commentsform.component.css']
})
export class CommentsformComponent implements OnInit {

  personnes:any = [];
  // commentaires:any = [];

  personneForm = this.fb.group({
    // identifiants
    id : [null, [Validators.required]],
    nom : ['', [Validators.required, this.checkInputValidator]],
    prenom : ['', [Validators.required, this.checkInputValidator]],
  // identifiant: this.fb.group({
  //     id : [null, [Validators.required]],
  //     nom : ['', [Validators.required, this.checkInputValidator]],
  //     prenom : ['', [Validators.required, this.checkInputValidator]],
  //   }),
    commentaire: this.fb.group({
      titre : ['', [Validators.required, this.checkInputValidator]],
      contenu : ['', [Validators.required, this.checkInputValidator]],
      categorie : ['', [Validators.required, this.checkInputValidator]]
    }),
    commentaires : this.fb.array([
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

  get id(){
    return this.personneForm.get('id')
  }
  get nom(){
    return this.personneForm.get('nom')
  }
  get prenom(){
    return this.personneForm.get('prenom')
  }
  get titre(){
    return this.personneForm.get('titre')
  }
  get contenu(){
    return this.personneForm.get('contenu')
  }
  get categorie(){
    return this.personneForm.get('categorie')
  }
  get commentaires(){
    return this.personneForm.get('commentaires') as FormArray
  }

  afficherTout(){
    this.personnes.push({​​ ...this.personneForm.value }​​);
      console.log(this.personneForm.value); // C'est la valeur
      console.log(this.personneForm.controls.nom); // C'est l'objet nom
     console.log(this.personneForm.get('nom'));
    this.personneForm.reset();
  }

  ajouterCommentaire(){
    this.commentaires.push(this.fb.control(''));
  }
  supprimerCommentaire(i : number){
    this.commentaires.removeAt(i);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // La ligne ci-dessous sert de test pour voir si des valeurs sont bien insérées dans les champs idoines
    // Lorsqu'elle est commentée, elle désactive le boutton 'submit'
    this.personneForm.setValue({nom : 'Doe', prenom : 'John', id : 1});
  }

}
