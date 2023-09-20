import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../view-emp/employee';
import { Router } from '@angular/router';

@Component({
  selector: '[app-employee-info]',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {

  @Input() employee: Employee;
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onClick(employeeId : number){
    this.router.navigate(['/employees', employeeId]);
  }
}
