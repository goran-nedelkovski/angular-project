import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
//import { compileBaseDefFromMetadata } from '@angular/compiler';
import { HomeComponent } from './home/home.component';
import { UserDetailsComponent } from './user-details/user-details.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch: 'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: 'home',
    component:HomeComponent
  },
  {
    path: 'user-details',
    component: UserDetailsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
