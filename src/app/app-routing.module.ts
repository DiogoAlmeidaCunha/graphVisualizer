import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
	{
		path: '',
		loadChildren: 'src/app/modules/auth/auth.module#AuthModule'
	},
	{
		path: 'home',
		loadChildren: 'src/app/modules/navegation/navegation.module#NavegationModule'
	},
	{
		path:'**',
		component: PageNotFoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
