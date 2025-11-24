import { RouterModule, Routes } from '@angular/router';
import { EmployeeList } from './employee-list/employee-list';
import { CreateEmployee } from './create-employee/create-employee';
import { UpdateEmployee } from './update-employee/update-employee';
import { EmployeeDetails } from './employee-details/employee-details';

export const routes: Routes = [
    {path:'employees',component:EmployeeList},
    {path:'create-employee',component:CreateEmployee},
    {path:'',redirectTo:'employees',pathMatch:'full'},
    {path:'update-employee/:id',component:UpdateEmployee},
    {path:'employee-details/:id',component:EmployeeDetails}
];
