import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { SearchComponent } from './search/search.component';
import { PipesComponent } from './pipes/pipes.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, SearchComponent, PipesComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
