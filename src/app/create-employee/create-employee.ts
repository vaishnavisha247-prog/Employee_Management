import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee-service';
import { Router } from '@angular/router';
import { error, log } from 'console';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-employee.html',
  styleUrl: './create-employee.css',
})
export class CreateEmployee {
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,
    private router:Router
    
  ){}

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe((data: any) =>{
      console.log(data);
      this.goToEmployeeList();
    },
      (  error: any)=>console.log(error));
  }
  goToEmployeeList(){

    this.router.navigate([`/employees`]);
  }
  
  onSubmit(){
    console.log(this.employee);
    this.saveEmployee();

  }


}
