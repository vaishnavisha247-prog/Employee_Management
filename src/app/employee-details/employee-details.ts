import { Component } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee-service';
import { log } from 'node:console';

@Component({
  standalone:true,
  selector: 'app-employee-details',
  imports: [],
  templateUrl: './employee-details.html',
  styleUrls: ['./employee-details.css'],
})
export class EmployeeDetails {
  id:number=0;
  employee:Employee = new Employee();

  constructor(
    private route:ActivatedRoute ,
     private employeeService:EmployeeService)
     {}
  ngOnInit():void{
    console.log("ID received = ",this.id);
    this.id=this.route.snapshot.params['id'];
    
    this.employeeService.getEmployeeById(this.id).subscribe(data =>{
      this.employee =data;
    });
  }

}
