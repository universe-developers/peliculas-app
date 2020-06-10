import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable( {
                 providedIn: 'root'
             } )
export class PeliculasService {
    private apiKey = 'd2b8c392c4ab613c9978e3aedd112da9';

    constructor(private _http: HttpClient ) {

    }
    getPopularity() {
        const url = `/discover/movie?sort_by=popularity.desc&api_key=${this.apiKey}&language=es`;
        return this.root(url);
    }

    root(methods) {
        return this._http.get(`https://api.themoviedb.org/3${methods}`);
    }
    rootPoster( image: any , width: number = 300 ) {
        // EL w significa el width
        return this._http.get( `https://image.tmdb.org/t/p/w300/8bZ7guF94ZyCzi7MLHzXz6E5Lv8.jpg` ).pipe(map(item => {
            console.log(item);
            return item; } ));
    }
    billBoard() {
        const url = `/trending/all/day?api_key=${this.apiKey}&language=es`;
        return this.root(url);
    }
    billBoardKids() {
        const url = `/discover/movie?api_key=${this.apiKey}&language=es&with_genres=16`;
        return this.root(url);
    }
    search(keyword) {
        const url = `/search/movie?api_key=${this.apiKey}&query=${keyword}&language=es`;
        return this.root(url);
    }

}
