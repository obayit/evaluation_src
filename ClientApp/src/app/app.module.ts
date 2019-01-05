import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyOwnCustomMaterialModule } from './material'
import { HttpClientModule } from '@angular/common/http';
import { EmployeeTableComponent } from './employee-table/employee-table.component';
import { DialogAddEmpComponent } from './dialog-add-emp/dialog-add-emp.component';
import { MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { FormsModule }   from '@angular/forms';
import { EmpTableComponent } from './employee/emp-table/emp-table.component';
import { TableTemplateComponent } from './employee/table-template/table-template.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeTableComponent,
    EmpTableComponent,
    DialogAddEmpComponent,
    EmpTableComponent,
    TableTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MyOwnCustomMaterialModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule
  ],
  entryComponents:[
    DialogAddEmpComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
