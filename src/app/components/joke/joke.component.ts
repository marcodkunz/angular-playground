import {Component, OnInit} from '@angular/core';
import {JokeService} from "../../services/joke.service";
import {Joke, JokeResponse} from "../../models/Joke";

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {

  constructor(private jokeService: JokeService) {
  }

  joke: Joke | undefined;

  ngOnInit(): void {
    this.getJoke();
  }

  getJoke(): void {
    this.jokeService.getJoke().subscribe((data: JokeResponse) => this.joke = data.value);
  }

}
