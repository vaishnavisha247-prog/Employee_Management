import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { Employee } from './employee';
import { CreateEmployee } from './create-employee/create-employee';
import { FormsModule } from '@angular/forms';
import { EmployeeDetails } from './employee-details/employee-details';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeeList,CreateEmployee,FormsModule,EmployeeDetails],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {

  constructor(
    private route: Router
  ) {}

  navigateEmployee() {
    this.route.navigateByUrl("/employees");
  }

  navigateCreateEmployee() {
    this.route.navigateByUrl("/create-employee");
  }
}
