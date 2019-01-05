import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {EmpMaster, EmpDetails} from './employee';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable()
export class DataService {
  private readonly API_URL = 'https://api.github.com/repos/angular/angular/issues';
  private readonly addEmpUrl = 'employees/add/';
  private readonly deleteEmpUrl = 'employees/delete/';

  dataChange: BehaviorSubject<EmpMaster[]> = new BehaviorSubject<EmpMaster[]>([]);
  // Temporarily stores data from dialogs
  dialogData: any;

  constructor (private httpClient: HttpClient
    // , private toasterService: ToasterService
    ) {}

  get data(): EmpMaster[] {
    return this.dataChange.value;
  }

  getDialogData() {
    return this.dialogData;
  }

  /** CRUD METHODS */
  getAllIssues(): void {
    this.httpClient.get<EmpMaster[]>(this.API_URL).subscribe(data => {
        this.dataChange.next(data);
      },
      (error: HttpErrorResponse) => {
      console.log (error.name + ' ' + error.message);
      });
  }

  // DEMO ONLY, you can find working methods below
  addIssue (issue: EmpMaster): void {
    this.dialogData = issue;
  }

  updateIssue (issue: EmpMaster): void {
    this.dialogData = issue;
  }

  deleteIssue (id: number): void {
    console.log(id);
  }


/* REAL LIFE CRUD Methods I've used in my projects. ToasterService uses Material Toasts for displaying messages:*/

    // ADD, POST METHOD
    addItem(item: EmpMaster): void {
    this.httpClient.post(this.addEmpUrl, item).subscribe(data => {
      this.dialogData = item;
      // this.toasterService.showToaster('Successfully added', 3000);
      },
      (err: HttpErrorResponse) => {
      // this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    });
   }

    // UPDATE, PUT METHOD
    //  updateItem(kanbanItem: KanbanItem): void {
    // this.httpClient.put(this.API_URL + kanbanItem.id, kanbanItem).subscribe(data => {
    //     this.dialogData = kanbanItem;
    //     this.toasterService.showToaster('Successfully edited', 3000);
    //   },
    //   (err: HttpErrorResponse) => {
    //     this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
    //   }
    // );
  // }

  // DELETE METHOD
  deleteItem(id: number): void {
    this.httpClient.delete(this.deleteEmpUrl + id).subscribe(data => {
      console.log(data['']);
        // this.toasterService.showToaster('Successfully deleted', 3000);
      },
      (err: HttpErrorResponse) => {
        // this.toasterService.showToaster('Error occurred. Details: ' + err.name + ' ' + err.message, 8000);
      }
    );
  }
}




