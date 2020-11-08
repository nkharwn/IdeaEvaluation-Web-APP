import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user-login/login/login.component';
import { IdeaListComponent } from './idea-evaluation/idea-list/idea-list.component';
import {AuthGuard} from './shared/guard/auth-guard';

const routes: Routes = [
{path:'', redirectTo:"/login",pathMatch:"full"},
{path:'login', component:LoginComponent},
{path:'ideas',canActivate: [AuthGuard], component:IdeaListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
