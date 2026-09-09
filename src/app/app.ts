import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html'
})
export class App {
  
  movies = [
    {
      title: 'Interstellar',
      year: 2014,
      rating: 9
    },
    {
      title: 'Avatar',
      year: 2009,
      rating: 8
    },
    {
      title: 'Titanic',
      year: 1997,
      rating: 7
    }
  ];

  newMovie = {
    title: '',
    year: 0,
    rating: 0
  };

  addMovie() {
    if (
      this.newMovie.title.trim() === '' ||
      this.newMovie.year <= 0 ||
      this.newMovie.rating <= 0
    ) {
      return;
    }

    this.movies.push({
      title: this.newMovie.title,
      year: this.newMovie.year,
      rating: this.newMovie.rating
    });

    this.newMovie = {
      title: '',
      year: 0,
      rating: 0
    };
  }

  deleteMovie(index: number) {
    this.movies.splice(index, 1);
  }
}