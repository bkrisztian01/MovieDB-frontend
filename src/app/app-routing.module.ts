import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DiscoverMoviesComponent } from './components/discover-movies/discover-movies.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'discover/movies',
    component: DiscoverMoviesComponent,
  },
  {
    path: 'movies/:id',
    component: MoviePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
