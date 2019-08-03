import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AboutComponent } from './components/about/about.component';
import { DetailComponent } from './components/detail/detail.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  {path:'', component:ListComponent},
  {path:'list', component:ListComponent},
  {path:'detail/:id', component:DetailComponent},
  {path:'about', component:AboutComponent},
  {path:'**',component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
