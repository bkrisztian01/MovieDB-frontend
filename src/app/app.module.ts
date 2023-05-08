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
import { MatGridListModule } from '@angular/material/grid-list';
import { NgCircleProgressModule } from 'ng-circle-progress';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { MovieItemComponent } from './components/movie-item/movie-item.component';
import { MovieScrollerComponent } from './components/movie-scroller/movie-scroller.component';
import { DiscoverMoviesComponent } from './components/discover-movies/discover-movies.component';
import { MoviePageComponent } from './components/movie-page/movie-page.component';
import { DiscoverTvShowsComponent } from './components/discover-tv-shows/discover-tv-shows.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { SearchMovieResultComponent } from './components/search-movie-result/search-movie-result.component';
import { FallbackImgDirective } from './directives/fallback-img.directive';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { CastItemComponent } from './components/cast-item/cast-item.component';
import { CastScrollerComponent } from './components/cast-scroller/cast-scroller.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    MovieItemComponent,
    MovieScrollerComponent,
    DiscoverMoviesComponent,
    MoviePageComponent,
    DiscoverTvShowsComponent,
    SearchPageComponent,
    SearchMovieResultComponent,
    FallbackImgDirective,
    SearchFormComponent,
    CastItemComponent,
    CastScrollerComponent,
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
    MatGridListModule,
    NgCircleProgressModule.forRoot({
      backgroundStrokeWidth: 0,
      backgroundPadding: 0,
      radius: 10,
      space: 10,
      innerStrokeWidth: 0,
      titleFontSize: '25',
      showSubtitle: false,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
