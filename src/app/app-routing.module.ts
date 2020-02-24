import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';



/* Add a default route
When the app starts, the browser's address bar points to the web site's root.
That doesn't match any existing route so the router doesn't navigate anywhere.
The space below the <router-outlet> is blank.To make the app navigate to the
dashboard automatically, add the following route to the AppRoutingModule.
Routes array. The empty '' is always the home page. */

//parameterized route. : colon in the path is a placeholder for a specific hero

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  exports: [ RouterModule ]
 }
