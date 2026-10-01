import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css'
})
export class MovieForm {
  newItem = {
    title: '',
    director: '',
    description: ''
  };

  movies: any[] = [];

  submitted = false;

  addItem(form: any) {
    this.submitted = true;

    if (form.invalid) {
      return;
    }

    this.movies.push({
      title: this.newItem.title,
      director: this.newItem.director,
      description: this.newItem.description
    });

    form.resetForm();
    this.submitted = false;
  }
}
