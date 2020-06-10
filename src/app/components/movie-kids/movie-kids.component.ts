import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-movie-kids',
  templateUrl: './movie-kids.component.html',
  styleUrls: ['./movie-kids.component.css']
})
export class MovieKidsComponent implements OnInit {
    public moviePopularity: any[] = [];

    constructor(private _movieService: PeliculasService) {
        this._movieService.billBoardKids().subscribe( (moviesPopularityResponse: any) =>
                                                          this.moviePopularity = moviesPopularityResponse.results);
    }
  ngOnInit() {
  }

}
