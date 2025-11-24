package com.Employee_management.Employee_management.repository;

import com.Employee_management.Employee_management.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<Employee , Integer> {
}
