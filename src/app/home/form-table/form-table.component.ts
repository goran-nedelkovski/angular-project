import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
//import {User} from '../form-table/user.model';
export interface User {
  userName: string;
  age: number;
}
@Component({
  selector: 'app-form-table',
  templateUrl: './form-table.component.html',
  styleUrls: ['./form-table.component.css']
})
export class FormTableComponent implements OnInit {
 //form:FormGroup;

 columnsToDisplay: string[] = ["userName", "age"];
 public USER_DATA: User[] = [
   { userName: "Wacco", age: 12 },
   { userName: "Wacca", age: 13 },
   { userName: "Waccu", age: 14 }
 ];
 public newUser = {userName: "ABC", age: 15};
 public myDataArray: any;

 addName() {
   const newUsersArray = this.USER_DATA;
   newUsersArray.push(this.newUser);
   this.myDataArray = [...newUsersArray];
   this.newUser = {userName:"", age: 0};
   console.warn(this.myDataArray);
 }

 constructor() {
   this.myDataArray = new MatTableDataSource<User>([...this.USER_DATA]);
 }

 ngOnInit() {}
   
}


