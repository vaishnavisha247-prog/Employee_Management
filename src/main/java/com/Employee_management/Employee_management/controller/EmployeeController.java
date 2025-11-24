package com.Employee_management.Employee_management.controller;

import com.Employee_management.Employee_management.entity.Employee;
import com.Employee_management.Employee_management.repository.EmployeeRepository;
import com.Employee_management.Employee_management.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.context.config.ConfigDataResourceNotFoundException;
import org.springframework.data.domain.Page;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = """
        http://localhost:4200""")
@RequestMapping("/employees")
public class EmployeeController {
    @Autowired
    private EmployeeRepository employeeRepository;
    @Autowired
    private EmployeeService employeeService;

    @GetMapping("/pagination")
    public Page<Employee> GetEmployeeByPagination(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "3") int size){
          //@RequestParam(defaultValue = "id") String sortBy){
        return employeeService.getEmployeeWithPagination(page ,size);
    }




    @GetMapping
    public List<Employee> getAllEmployee(){
      return employeeRepository.findAll();
    }

    @PostMapping
    public Employee craeteEmployee(@RequestBody Employee employee){

        return employeeRepository.save(employee);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Employee> getEmployeeById(@PathVariable int id){
       Employee employee =  employeeRepository.findById(id).orElseThrow(()-> new RuntimeException("Employee not found with id "+ id));
       return ResponseEntity.ok(employee);
    }
    @PutMapping("/{id}")
    public ResponseEntity<Employee> updateEmployee(@PathVariable int id, @RequestBody Employee employee){
       Employee employee1 =  employeeRepository.findById(id).orElseThrow(() -> new RuntimeException("Employee not found with id: " + id));
       employee1.setFirstName(employee.getFirstName());
       employee1.setLastName(employee.getLastName());
       employee1.setSalary(employee.getSalary());
      Employee update =  employeeRepository.save(employee1);
      return ResponseEntity.ok(update);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteEmployee(@PathVariable int id){
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new RuntimeException("Employee not found with id " + id));
        employeeRepository.delete(employee);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted",Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
