import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DiscoverMoviesComponent } from './components/discover-movies/discover-movies.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { DiscoverTvShowsComponent } from './components/discover-tv-shows/discover-tv-shows.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { PersonPageComponent } from './components/person-page/person-page.component';
import { TvShowPageComponent } from './components/tv-show-page/tv-show-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'discover/movie',
    component: DiscoverMoviesComponent,
  },
  {
    path: 'discover/tv',
    component: DiscoverTvShowsComponent,
  },
  {
    path: 'movie/:id',
    component: MoviePageComponent,
  },
  {
    path: 'tv/:id',
    component: TvShowPageComponent,
  },
  {
    path: 'person/:id',
    component: PersonPageComponent,
  },
  {
    path: 'search',
    component: SearchPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
