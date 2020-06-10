import { MovieBillboardComponent } from './components/movie-billboard/movie-billboard.component';
import { MovieKidsComponent } from './components/movie-kids/movie-kids.component';
import { BillboardKidsComponent } from './components/billboard-kids/billboard-kids.component';
import { Routes } from '@angular/router';

export const MOVIES_ROUTES: Routes = [
    { path: 'peliculas-carteleras' , component: MovieBillboardComponent } ,
    { path: 'peliculas-destacadas' , component: BillboardKidsComponent } ,
    { path: 'destacadas-kids' , component: MovieKidsComponent } ,
    { path: '**' , pathMatch: 'full' , redirectTo: 'peliculas-carteleras' },
    { path: ' ' , pathMatch: 'full' , redirectTo: 'peliculas-carteleras' }
];
