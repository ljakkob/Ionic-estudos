import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class MovieProvider {
private baseApiPath ="https://api.themoviedb.org/3";
  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }


getLatestMovies(){
return this.http.get(this.baseApiPath + "/movie/popular?api_key=24fa5397c1c5ed35665991d40789fe66");


}

}
