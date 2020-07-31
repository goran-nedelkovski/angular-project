import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
//import {User} from '../form-table/user.model';
export interface User {
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
}
@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {
 //form:FormGroup;

 columnsToDisplay: string[] = ["firstName", "lastName", "email", "phone"];
 public USER_DATA: User[] = [
   { firstName: "Aco", lastName: "Acovski", email: "test@test1.com", phone: 968726385 },
   { firstName: "Dule", lastName: "Dulevski", email: "test@test2.com", phone: 7868726385 },
   { firstName: "Eli", lastName: "Elevska", email: "test@test3.com", phone: 2368726385 }
 ];
 public newUser = { firstName: "", lastName: "", email: "", phone: 0 };
 public myDataArray: any;

 addUser() {
   const newUsersArray = this.USER_DATA;
   newUsersArray.push(this.newUser);
   this.myDataArray = [...newUsersArray];
   this.newUser = { firstName: "", lastName: "", email: "", phone: 0 }
   console.warn(this.myDataArray);
 }

 constructor() {
   this.myDataArray = new MatTableDataSource<User>([...this.USER_DATA]);
 }

 ngOnInit() {}
   
}


