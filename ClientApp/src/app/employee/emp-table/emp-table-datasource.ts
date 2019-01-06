import { DataSource } from '@angular/cdk/collections';
import { MatPaginator, MatSort } from '@angular/material';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge, BehaviorSubject } from 'rxjs';
import { EmpMaster } from 'src/app/employee';
import { EmployeeService } from 'src/app/employee.service';

/**
 * Data source for the EmpTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class EmpTableDataSource extends DataSource<EmpMaster> {
  data: EmpMaster[] = [];
  // data: BehaviorSubject<EmpMaster[]> = new BehaviorSubject<EmpMaster[]>([]);


  constructor(private paginator: MatPaginator, private sort: MatSort
    ,private employeeService: EmployeeService
    ) {
    super();
  }

  getData(){
    this.employeeService.getList().subscribe(res=>{
      // this.data.next(res);
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
    this.employeeService.getList().subscribe(res=>{
      this.data = res;
      const dataMutations = [
        this.data,
        this.paginator.page,
        this.sort.sortChange
      ];

      // Set the paginator's length
      this.paginator.length = 10;

      return merge(...dataMutations).pipe(map(() => {
        return this.getPagedData(this.getSortedData([...this.data]));
      }));
    });
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect() {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: EmpMaster[]) {
    const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
    return data.splice(startIndex, this.paginator.pageSize);
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: EmpMaster[]) {
    if (!this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort.direction === 'asc';
      switch (this.sort.active) {
        case 'name': return compare(a.EmpName, b.EmpName, isAsc);
        case 'id': return compare(+a.EmpId, +b.EmpId, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
