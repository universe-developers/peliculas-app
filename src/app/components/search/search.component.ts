import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public movieBillboard: any[] = [];
    public isShow = false;
    public keywords = '';
    constructor(private _movieServices: PeliculasService,
                private _router: ActivatedRoute) {
        this._router.params.subscribe(keywords => {
            this.keywords = keywords.search;
            this._movieServices.search(keywords.search).subscribe((movie: any) => {
                if (movie) {
                    this.movieBillboard = movie.results;
                    this.isShow = true;
                }
            });
        });
    }
  ngOnInit() {
  }

}
