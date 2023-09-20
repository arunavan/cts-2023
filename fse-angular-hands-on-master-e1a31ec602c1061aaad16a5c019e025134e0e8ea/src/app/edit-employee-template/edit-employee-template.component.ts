import { Component, OnInit } from '@angular/core';
import { Employee } from '../view-emp/employee';
import { Department } from '../view-emp/department';

@Component({
  selector: 'app-edit-employee-template',
  templateUrl: './edit-employee-template.component.html',
  styleUrls: ['./edit-employee-template.component.css']
})
export class EditEmployeeTemplateComponent implements OnInit {

  employee: Employee;
  departments : Department[];
  permanent: string;
  
  constructor() { }

  ngOnInit() {

    this.employee = {
      id: "3",
      name: "John",
      salary: 10000,
      permanent: false,
      department: {
        id: 2,
        name: "Internal"
      },
      skills: [
        { id: 1, name: "HTML" },
        { id: 2, name: "CSS" },
        { id: 3, name: "JavaScript" }
      ],
      dateOfBirth: new Date('04/21/2019')
    };
    
    this.permanent = this.employee.permanent == true ? "Yes" : "No";
    this.departments = [
      { id: 1, name: "Payroll" },
      { id: 2, name: "Internal" },
      { id: 3, name: "HR" }
    ];
  }

  onSubmit() {
    console.log(this.employee);
  }

  departmentChange(target:any) {
    console.log(target);
  }
}
