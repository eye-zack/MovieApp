import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFilterComponent } from './movie-filter/movie-filter.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieServiceComponent } from './movie-service/movie-service.component';
import { HomeComponent } from './modules/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieDetailsComponent,
    MovieFilterComponent,
    MovieListComponent,
    MovieServiceComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
