import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookComponent } from './pages/book/book.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
{
  path:'book',
  component:BookComponent
},
{
  path:'sign-in',
  component:SignInComponent
},

{
  path:'reg',
  component:RegistroComponent
},
{
  path:'**',
  component:PageNotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
