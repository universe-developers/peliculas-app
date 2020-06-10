import { RouterModule , Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { MOVIES_ROUTES } from './movies-routes.app';

const APP_ROUTES: Routes = [
    { path: 'home' ,
        component: HomeComponent,
        children: MOVIES_ROUTES
    } ,
    { path: 'busqueda/:search' , component: SearchComponent } ,
    { path: '**' , pathMatch: 'full' , redirectTo: 'home' } ,
    { path: ' ' , pathMatch: 'full' , redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot( APP_ROUTES , { useHash: false } );





