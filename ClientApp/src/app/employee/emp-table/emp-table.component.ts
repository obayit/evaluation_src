import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatDialog } from '@angular/material';
import { EmpTableDataSource } from './emp-table-datasource';
import { EmployeeService } from 'src/app/employee.service';
import { DialogAddEmpComponent } from 'src/app/dialog-add-emp/dialog-add-emp.component';

@Component({
  selector: 'app-emp-table',
  templateUrl: './emp-table.component.html',
  styleUrls: ['./emp-table.component.css']
})
export class EmpTableComponent implements OnInit {
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;
  dataSource: EmpTableDataSource;

  constructor(
    public dialog: MatDialog,
    private employeeService: EmployeeService
  ){}

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['EmpCode', 'EmpName', 'EmpDetails.Email', 'actions'];

  ngOnInit() {
    this.dataSource = new EmpTableDataSource(this.employeeService);
    this.dataSource.loadData();
  }

  addNew() {
    const dialogRef = this.dialog.open(DialogAddEmpComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        // this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        // this.refreshTable();
      }
    });
  }
}
