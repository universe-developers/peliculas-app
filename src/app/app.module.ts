import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './public/navbar/navbar.component';
import { CategoriasComponent } from './public/categorias/categorias.component';
import { APP_ROUTING } from './routes.app';
import { MovieBillboardComponent } from './components/movie-billboard/movie-billboard.component';
import { MovieKidsComponent } from './components/movie-kids/movie-kids.component';
import { BillboardKidsComponent } from './components/billboard-kids/billboard-kids.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { CardMovieComponent } from './public/card-movie/card-movie.component';
import { CutoutTextPipe } from './pipe/cutout-text.pipe';
import { FormsModule } from '@angular/forms';

@NgModule( {
               declarations: [
                   AppComponent ,
                   NavbarComponent ,
                   CategoriasComponent ,
                   MovieBillboardComponent,
                   MovieKidsComponent,
                   BillboardKidsComponent,
                   HomeComponent,
                   SearchComponent,
                   CardMovieComponent,
                   CutoutTextPipe
               ] ,
               imports: [
                   BrowserModule ,
                   HttpClientModule ,
                   FormsModule,
                   APP_ROUTING
               ] ,
               providers: [] ,
               bootstrap: [ AppComponent ]
           } )
export class AppModule {
}
