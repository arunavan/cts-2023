import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Employee } from '../view-emp/employee';
import { Department } from '../view-emp/department';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css']
})
export class EditEmpComponent implements OnInit {
  empForm: FormGroup;
  employee: Employee = {
    id: "3",
    name: "John",
    salary: 10000,
    permanent: false,
    department: {
      id: 3,
      name: "HR"
    },
    skills: [
      { id: 1, name: "HTML" },
      { id: 2, name: "CSS" },
      { id: 3, name: "JavaScript" }
    ],
    dateOfBirth: new Date('04/21/2019')
  };

  departments: Department[];

  constructor(private route : ActivatedRoute) { }

  ngOnInit() {

    const param = this.route.snapshot.paramMap.get('id');
    console.log('Id: ' + param);

    this.empForm = new FormGroup({
      'id': new FormControl(this.employee.id),
      'name': new FormControl(this.employee.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20)
      ]),
      'salary': new FormControl(this.employee.salary, [
        Validators.required
      ]),
      'department': new FormGroup({
        id: new FormControl(this.employee.department.id),
        name: new FormControl(this.employee.department.name)
      }),
      'permanent': new FormControl(this.employee.permanent == true ? "Yes" : "No", [
        Validators.required
      ]),
    });

    this.departments = [
      { id: 1, name: "Payroll" },
      { id: 2, name: "Internal" },
      { id: 3, name: "HR" }
    ];    
  }

  get salary() { return this.empForm.get('salary'); }
  get name() { return this.empForm.get('name'); }
  get department() { return this.empForm.get('department'); }
  get permanent() { return this.empForm.get('permanent'); }

  onSubmit() {
    if (this.empForm.valid) {
      console.log("Form Submitted!");
      console.log(this.empForm.value);
    }
  }

}
