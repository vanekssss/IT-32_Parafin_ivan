import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MovieService } from './services/movie';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = '';
  year = 0;
  rating = 0;

  constructor(private service: MovieService) {}

  getItems() {
    return this.service.getItems();
  }

  addItem() {
    this.service.addItem(
      this.title,
      this.year,
      this.rating
    );

    this.title = '';
    this.year = 0;
    this.rating = 0;
  }

  removeItem(id: number) {
    this.service.removeItem(id);
  }
}