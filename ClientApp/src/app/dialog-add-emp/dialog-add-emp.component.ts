import { Component, OnInit, Inject } from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {EmployeeService} from '../employee.service';
import {FormControl, Validators} from '@angular/forms';
import {EmpMaster, EmpDetails} from '../employee';


@Component({
  selector: 'app-dialog-add-emp',
  templateUrl: './dialog-add-emp.component.html',
  styleUrls: ['./dialog-add-emp.component.css']
})
export class DialogAddEmpComponent implements OnInit {
  data: EmpMaster

  constructor(public dialogRef: MatDialogRef<DialogAddEmpComponent>,
    // @Inject(MAT_DIALOG_DATA) public data: Issue,
    public employeeService: EmployeeService) { }

  ngOnInit() {
    this.data = new EmpMaster();
    this.data.EmpDetails = new EmpDetails();
  }
  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {
    this.data.EmpDetails.EmpId = this.data.EmpId;
    this.employeeService.addEmpMaster(this.data);
  }

}
