import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DragdropComponent } from './components/dragdrop/dragdrop.component';


const routes: Routes = [
  { path:'',component: NavComponent,
  children:[
    { path:'dashboard', component: DashboardComponent},
    { path:'dragdrop', component: DragdropComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavegationRoutingModule { }
