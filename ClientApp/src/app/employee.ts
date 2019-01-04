export class EmpMaster{
    empId: number;
    empCode: number;
    empName: string;
    empDetails: EmpDetails;
  }

export class EmpDetails{
    empId: number;
    houseNo: string;
    blockNo: string;
    street: string;
    city: string;
    state: string;
    country: string;
    phone: number;
    email: string;
}