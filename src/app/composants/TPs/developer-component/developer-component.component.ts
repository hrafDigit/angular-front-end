import { Component, OnInit, Input, Output, EventEmitter, ViewChild, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { Developer } from '../classes/developer';
import { SkillComponentComponent } from '../skill-component/skill-component.component';

@Component({
  selector: 'app-developer-component',
  templateUrl: './developer-component.component.html',
  styleUrls: ['./developer-component.component.css']
})
export class DeveloperComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // developers: Developer = new Developer();


    // developer = new Array<Developer>;

    // @ViewChildren(SkillComponentComponent) developers!: QueryList<SkillComponentComponent>;
    // this.developers.forEach(elt => console.log(elt));

  }

  @Input() name!: string;
  @Input() logo!: string;
  @Input() site!: string;


}
