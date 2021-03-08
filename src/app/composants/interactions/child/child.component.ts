import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() nom!: string;
  @Output() message = new EventEmitter<number>();

  note!: number;

  buttonStatus: boolean=false;

  send(){
    this.message.emit(this.note);
    this.buttonStatus = true;
  }

}
