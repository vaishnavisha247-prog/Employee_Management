package com.Employee_management.Employee_management.service;

import com.Employee_management.Employee_management.entity.Employee;
import com.Employee_management.Employee_management.repository.EmployeeRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {
    private EmployeeRepository employeeRepository;

    public Page<Employee> getEmployeeWithPagination(int page,int size){
        Pageable pageable = PageRequest.of(page,size);
        return employeeRepository.findAll(pageable);
    }

    public List<Employee> getAllEmployees(){
        return employeeRepository.findAll();
    }

}
