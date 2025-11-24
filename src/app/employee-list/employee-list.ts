import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee'
import { EmployeeService } from '../employee-service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  standalone:true,
  selector: 'app-employee-list',
  imports:[CommonModule,RouterModule],
  templateUrl: './employee-list.html',
  styleUrls: ['./employee-list.css']

})
export class EmployeeList implements OnInit {
  currentPage=0;
  pageSize=5;
  totalElement  = 0;

  employees: Employee[]=[];

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getEmployees();
    this.loadEmployee();
  }

  private getEmployees(){
    this.employeeService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }

  employeeDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateEmployee(id: number){
    this.router.navigate(['update-employee', id]);
  }

  deleteEmployee(id: number){
    this.employeeService.deleteEmployee(id).subscribe( data => {
      this.loadEmployee();
      console.log(data);
      this.router.navigate(['/employees'])
      //this.loadEmployee();
    })
  }
  loadEmployee(){
    this.employeeService.getEmployeeListByPagination(this.currentPage,this.pageSize)
    .subscribe(data =>{
      this.employees = data.content;
      this.totalElement =data.totalElement;
      
    });
  }
  nextPage(){
   this.currentPage++;
   this.loadEmployee();
    this.router.navigate(['/create-employee']);
  }
  previousPage(){
    if(this.currentPage>0)
    this.currentPage--;
    this.loadEmployee();
  }
}