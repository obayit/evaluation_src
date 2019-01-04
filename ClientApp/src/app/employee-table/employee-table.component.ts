import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmpMaster } from '../employee';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.css']
})
export class EmployeeTableComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    private employeeService: EmployeeService
  ) { }
  dataSource: EmpMaster[];
  displayedColumns: string[] = ['empCode', 'empName', 'empDetails.email', 'actions'];

  ngOnInit() {
    this.read()
  }
  read() {
    this.employeeService.getList().subscribe(res=>{
      this.dataSource = res;
      console.log(res);
    });
  }

  addNew() {
    // const dialogRef = this.dialog.open(AddDialogComponent, {
    //   data: {issue: issue }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   if (result === 1) {
    //     // After dialog is closed we're doing frontend updates
    //     // For add we're just pushing a new row inside DataService
    //     this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
    //     this.refreshTable();
    //   }
    // });
  }

}
