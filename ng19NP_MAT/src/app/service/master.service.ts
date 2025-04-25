import { Injectable } from '@angular/core';
import { colorentity } from '../Entity/colorentity';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor() { }

  // Test: Local List of Colors
  GetColorList(): colorentity[]
  {
    return[
      {
        name: 'Red'
      },
      {
          name: 'Green'
      },
      {
          name: 'Yellow'
      }
    ]
  }

  //Add here your services against API endpoints

  //Sample service:
  // GetCustomer():Observable<Customer[]>{
  //   return this.http.get<Customer[]>("http://localhost:3000/customer");
  // }

  // TO IMPLEMENT: 
  // Make necessary adjustments based on ng19NP_AUTO Project  
  //   getAllDDLItemsByParam(searchValue: string) {      
  //     this.http.get("https://localhost:7271/api/DropDownListItemsMaster/GetDropDownListItems?param=" + searchValue).subscribe((res: any) => {           
  //      this.list = res;   
  //      this.filteredList = this.list;          
  //  }); 
  // }

}
