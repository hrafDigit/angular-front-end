import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Personne } from 'src/app/interface/personne'
import { PersonneService } from 'src/app/services/personne.service';

@Component({
  selector: 'app-select-personne',
  templateUrl: './select-personne.component.html',
  styleUrls: ['./select-personne.component.css']
})
export class SelectPersonneComponent implements OnInit {

  id!: number;
  personne!: Personne;

  constructor( private route: ActivatedRoute,private router: Router,private personneService: PersonneService ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.personneService.getsomePerson(this.id).subscribe(
      data => {
        this.personne = data;
        console.log(data);
      }
    );
  }
  // selectPerson() {
  //   this.personneService.detailsomePerson(this.id, this.personne).subscribe(
  //     data => {
  //       console.log(data);
  //     }
  //   )
  //   this.router.navigateByUrl('personne/personne-list')
  // }

}
