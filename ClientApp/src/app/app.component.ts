import { Component, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service'
import { EmpMaster } from './employee'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(
    private employeeService: EmployeeService
  ){}
  title = 'ClientApp';
  empId = 1;
  emp: EmpMaster;
  step = 0;

  ngOnInit(){
    this.search(this.empId);
  }

  search(id: number) {
    this.empId = id;
    this.employeeService.getEmployee(this.empId).subscribe(res=>{
      this.emp = res;
      console.log(res);
    });
  }
}
