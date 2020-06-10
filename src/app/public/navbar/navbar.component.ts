import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component( {
                selector: 'app-navbar' ,
                templateUrl: './navbar.component.html' ,
                styleUrls: [ './navbar.component.css' ]
            } )
export class NavbarComponent {
    public search: string = '';

    constructor( private _router: Router ) {
    }

    public keyPress() {
        console.log( this.search );
        this._router.navigate( [ 'busqueda' , this.search ] );
    }

    public back() {
        if ( this.search.length == 0 ) {
            this._router.navigate( [ 'home' ] );
        }
    }

}
