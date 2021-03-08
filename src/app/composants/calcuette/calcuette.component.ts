import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calcuette',
  templateUrl: './calcuette.component.html',
  styleUrls: ['./calcuette.component.css']
})
export class CalcuetteComponent implements OnInit {

  num1!: number;
	num2!: number;
	result!: number;
	sum() {
		this.result = this.num1 + this.num2;
	}
	diff() {
		this.result = this.num1 - this.num2;
	}
	mult() {
		this.result = this.num1 * this.num2;
	}
	div() {
		this.result = this.num1 / this.num2;
	}
  
  constructor() { }

  ngOnInit(): void {
  }

}
