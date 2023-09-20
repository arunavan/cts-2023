import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewEmpComponent } from './view-emp/view-emp.component'
import { EditEmpComponent } from './edit-emp/edit-emp.component'
import { QuantityIncrementComponent } from './quantity-increment/quantity-increment.component';
import { EditEmployeeTemplateComponent } from './edit-employee-template/edit-employee-template.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuardService } from './auth-guard.service';
import { LoginComponent } from './login/login.component';
import { TestServiceComponent } from './test-service/test-service.component';


const routes: Routes = [
  { path: 'view-emp', component: ViewEmpComponent },
  { path: 'edit-emp/:id', component: EditEmpComponent, canActivate: [AuthGuardService] },
  { path: 'quantity-increment', component: QuantityIncrementComponent },
  { path: 'edit-emp-template', component: EditEmployeeTemplateComponent },
  { path: 'employee-list', component: EmployeeListComponent },
  { path: 'notfound', component: PageNotFoundComponent },
  { path: 'login', component: LoginComponent },
  { path: 'test-service', component: TestServiceComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
