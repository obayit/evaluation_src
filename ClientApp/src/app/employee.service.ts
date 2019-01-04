import { Injectable } from '@angular/core';
import { EmpDetails, EmpMaster } from './employee';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

    readUrl = 'api/Employee/Read';
    listUrl = 'api/Employee/List';
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
  
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {
  
        console.error(error); // log to console instead
        //todo: show a message to user
  
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
