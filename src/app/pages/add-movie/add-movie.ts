import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MovieService } from '../../services/movie';

@Component({
  selector: 'app-add-movie',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-movie.html',
  styleUrl: './add-movie.css'
})
export class AddMovieComponent {

  submitted = false;

  movie = {
    title: '',
    director: '',
    description: ''
  };

  constructor(
    private movieService: MovieService,
    private router: Router
  ) {
  }

  addMovie(form: any) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.movieService.addItem(this.movie);

    form.resetForm();
    this.submitted = false;

    this.router.navigate(['/movies']);
  }
}