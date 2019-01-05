export class EmpMaster{
    EmpId: number;
    EmpCode: number;
    EmpName: string;
    EmpDetails: EmpDetails;
  }

export class EmpDetails{
    EmpId: number;
    HouseNo: string;
    BlockNo: string;
    Street: string;
    City: string;
    State: string;
    Country: string;
    Phone: number;
    Email: string;
}