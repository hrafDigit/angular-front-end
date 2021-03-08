import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { Employe } from 'src/app/interface/employe';
import { EmployeService } from 'src/app/services/employe.service'

@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css']
})
export class EmployesListComponent implements OnInit {

  employe: Employe = {}

  // ici 'employes' est un Observateur
  employes: Array<Employe> = new Array <Employe>();
  // employes:any;

  // ici 'employeService' est l'Observable
  constructor( private employeService: EmployeService, private router: Router ) { }

  ngOnInit(): void {
    // this.employes = this.employeService.getAll();
    this.reloadData();
  }

  reloadData() {
    this.employeService.getAllEmployees().subscribe(res => {
      this.employes = res;
    })
  }
  saveEmployee(){
    this.employeService.addsomeEmployee(this.employe).subscribe(
      res => {
        this.reloadData();
        console.log(res);
      }
    )
  }
  selectEmployee(id: number){
    this.router.navigate(['employe/select', id])
  }
  updateEmployee(id: number){
    this.router.navigate(['employe/update', id])
  }
  deleteEmployee(id:number){
    this.employeService.deletesomeEmployee(id).subscribe(
      data => {
        this.reloadData();
        console.log(data);
      }
    )
  }

}
