import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interface/personne'
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-update-personne',
  templateUrl: './update-personne.component.html',
  styleUrls: ['./update-personne.component.css']
})
export class UpdatePersonneComponent implements OnInit {

  id!: number;
  personne!: Personne;

  constructor( private personneService: PersonneService, private router: Router, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personneService.getsomePerson(this.id).subscribe(
      data => {
        this.personne = data;
        console.log(data);
      }
    )
  }
  updatePerson() {
    this.personneService.updatesomePerson(this.id, this.personne).subscribe(
      data => {
        console.log(data);
      }
    )
    this.router.navigateByUrl('personne/personnes-list')
  }

}
