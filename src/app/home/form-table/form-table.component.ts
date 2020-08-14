import { Component, OnInit, Input } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
//import {User} from './home/form-table/user.model';
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
 @Input() row: User;

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

 constructor(private http:HttpClient,private router:Router) {
   this.myDataArray = new MatTableDataSource<User>([...this.USER_DATA]);
 }

 ngOnInit() {}

  public getRecord(row: User) {
    console.log(row);
    //var json = JSON.stringify(row);
    //this.http.get('http://localhost:4200/user-details/'+'?row='+encodeURIComponent(json))

//    localStorage.setItem('row', row)
    this.router.navigate(['/user-details'], {queryParams:{firstName:'Goran',lastName:'Nedelkovski',email:'test@test5.com',phone:'12345'}})
//    //document.write(row)
  }
   
}


