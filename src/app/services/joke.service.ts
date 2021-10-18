import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Joke, JokeResponse} from "../models/Joke";

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private url: string = "http://api.icndb.com/jokes/random";

  constructor(private http: HttpClient) {
  }

  getJoke(): Observable<JokeResponse> {
     return this.http.get<JokeResponse>(this.url);
  }
}
