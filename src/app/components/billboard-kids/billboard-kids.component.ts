import { Component , OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component( {
                selector: 'app-billboard-kids' ,
                templateUrl: './billboard-kids.component.html' ,
                styleUrls: [ './billboard-kids.component.css' ]
            } )
export class BillboardKidsComponent implements OnInit {
    public moviePopularity: any[] = [];

    constructor(private _movieService: PeliculasService) {
        this._movieService.getPopularity().subscribe( (moviesPopularityResponse: any) =>
                                                         this.moviePopularity = moviesPopularityResponse.results);
    }

    ngOnInit() {
    }

}
