import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './pages/login/login.component';
// import { HomeComponent } from './pages/home/home.component';
// import { RegisterComponent } from './pages/register/register.component';
// import { MovieitemComponent } from './pages/movies/components/movieitem/movieitem.component';
// import { MovielistComponent } from './pages/movies/components/movielist/movielist.component';
// import { MoviesComponent } from './pages/movies/movies.component';
// import { PageOneComponent } from './pages/register/components/page-one/page-one.component';
// import { PageTwoComponent } from './pages/register/components/page-two/page-two.component';
import { MoviedetailsComponent } from './pages/movies/components/moviedetails/moviedetails.component';
import { AuthGuard } from './core/guards/auth.guard';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  // { path: 'movies', component: MoviesComponent },
  // {
  //   path: 'movies',
  //   loadChildren: () =>
  //     import('./pages/movies/movies.module').then((m) => m.MoviesModule)
  // },
  { 
    path: 'movies', 
    loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesModule),
    canActivate: [AuthGuard] 
  },
  // { path: 'register_1', component: PageOneComponent },
  // { path: 'register_2', component: PageTwoComponent },
  {
    path: 'register_1',
    loadChildren: () =>
      import('./pages/register/register.module').then((m) => m.RegisterModule),
  },
  { path: 'movie/:id', component: MoviedetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
