import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieScrollItemComponent } from './components/movie-scroll-item/movie-scroll-item.component';
import { MovieScrollerComponent } from './components/movie-scroller/movie-scroller.component';
import { DiscoverMoviesComponent } from './components/discover-movies/discover-movies.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { DiscoverTvShowsComponent } from './components/discover-tv-shows/discover-tv-shows.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchMovieResultComponent } from './components/search-movie-result/search-movie-result.component';
import { FallbackImgDirective } from './directives/fallback-img.directive';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MovieScrollItemComponent,
    MovieScrollerComponent,
    DiscoverMoviesComponent,
    MoviePageComponent,
    DiscoverTvShowsComponent,
    SearchPageComponent,
    SearchMovieResultComponent,
    FallbackImgDirective,
    SearchFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatPaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
