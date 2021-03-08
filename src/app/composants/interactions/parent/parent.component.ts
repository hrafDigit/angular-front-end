import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  moyenne = 0;
  somme = 0;
  nbr = 0;
  enfants = ['Jean', 'Julie', 'Abdou'];

  computeAvg(note: number){
    // post-incrémentation des notes pour avoir une somme
    this.somme += note;
    // on incrémente le nombre de notes à chaque qu'une nouvelle note survient
    this.nbr++;
    // on fait la moyenne
    this.moyenne = this.somme / this.nbr;
  }

}
