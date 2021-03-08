import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Personne } from 'src/app/interface/personne';
import { PersonneService } from 'src/app/services/personne.service'

@Component({
  selector: 'app-personnes-list',
  templateUrl: './personnes-list.component.html',
  styleUrls: ['./personnes-list.component.css']
})

export class PersonnesListComponent implements OnInit {

  personne: Personne = {}

  // ici 'personnes' est un Observateur
  personnes: Array<Personne> = new Array <Personne>();

  // ici 'personneService' est l'Observable
  constructor( private personneService: PersonneService, private router: Router ) { }

  ngOnInit(): void {
    // this.personnes = this.personneService.getAll();
    this.reloadData();
  }

  reloadData() {
    this.personneService.getAllPersons().subscribe(res => {
      this.personnes = res;
    })
  }

  savePerson(){
    this.personneService.addsomePerson(this.personne).subscribe(
      res => {
        this.reloadData();
        console.log(res);
      }
    )
  }
  deletePerson(id:number){
    this.personneService.deletesomePerson(id).subscribe(
      data => {
        this.reloadData();
        console.log(data);
      }
    )
  }
  updatePerson(id: number){
    this.router.navigate(['personne/update', id])
  }
  selectPerson(id: number){
    this.router.navigate(['personne/select', id])
  }

}
