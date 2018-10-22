import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
const routes: Routes = [
{path:'',component:SigninComponent},
{path:'signin',component:SigninComponent},
{path:'signup',component:SignupComponent},
// {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
