import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map, catchError, finalize } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject, of } from 'rxjs';
import { EmpMaster } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

/**
 * Data source for the EmpTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EmpTableDataSource extends DataSource<EmpMaster> {
  private data: BehaviorSubject<EmpMaster[]> = new BehaviorSubject<EmpMaster[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loadingSubject.asObservable();

  constructor(private employeeService: EmployeeService
    ) {
    super();
  }

  loadData(){
    this.loadingSubject.next(true);
    this.employeeService.getList().pipe(
      catchError(() => of([])),
      finalize(() => this.loadingSubject.next(false))
    ).subscribe(res=>{
      this.data.next(res);
    });
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<EmpMaster[]> {
    // Combine everything that affects the rendered data into one update
    // stream for the data-table to consume.
    return this.data.asObservable();
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {
    this.data.complete();
    this.loadingSubject.complete();
  }
}
