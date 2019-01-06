import { Injectable } from '@angular/core';
import { EmpDetails, EmpMaster } from './employee';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    private readonly readUrl = 'api/Employee/Read';
    private readonly listUrl = 'api/Employee/List';
    private readonly addEmpUrl = 'api/Employee/Add';
    private readonly deleteEmpUrl = 'api/Employee/delete/';

    // Temporarily stores data from dialogs
    dialogData: any;

    constructor(
      private http: HttpClient
    ) { }
    
    getEmployee(id: number): Observable<EmpMaster>{
      return  this.http.get<EmpMaster>(this.readUrl, {
        params: new HttpParams().set('id', String(id))}).pipe(
        catchError(this.handleError<any>('getEmployee', -1))
      );
    }

    getList(): Observable<EmpMaster[]>{
      return  this.http.get<EmpMaster[]>(this.listUrl).pipe(
        catchError(this.handleError<any>('getList', []))
      );
    }
    getAllEmp(){
      this.http.get<EmpMaster[]>(this.listUrl).pipe(
        catchError(this.handleError<any>('getAllEmp', []))
      ).subscribe(data => {
        this.dataChange.next(data);
      });
    }

    addEmpMaster(emp: EmpMaster): void {
    this.http.post(this.addEmpUrl, emp).subscribe(data => {
      this.dialogData = emp;
      // this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      // this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }
  
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        console.error(error); // log to console instead
        //todo: show a message to user
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
