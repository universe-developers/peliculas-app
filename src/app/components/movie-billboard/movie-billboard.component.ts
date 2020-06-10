import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-movie-billboard',
  templateUrl: './movie-billboard.component.html',
  styleUrls: ['./movie-billboard.component.css']
})
export class MovieBillboardComponent implements OnInit {

    public movieBillboard: any[] = [];
  constructor(private _movieServices: PeliculasService) {
      this._movieServices.billBoard().subscribe((movie: any) => {
        this.movieBillboard = movie.results;
      });
  }

  ngOnInit() {
  }

}
