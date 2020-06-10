import { Component , Input , OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component( {
                selector: 'app-card-movie' ,
                templateUrl: './card-movie.component.html' ,
                styleUrls: [ './card-movie.component.css' ]
            } )
export class CardMovieComponent implements OnInit {

    @Input() movie;

    constructor( public _movieService: PeliculasService ) {
    }

    ngOnInit() {
    }

}
