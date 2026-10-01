import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies = [
    {
      id: 1,
      title: 'Interstellar',
      director: 'Christopher Nolan',
      description: 'Науково-фантастичний фільм про космос і подорожі в часі'
    },
    {
      id: 2,
      title: 'Avatar',
      director: 'James Cameron',
      description: 'Фантастичний фільм про планету Пандора'
    },
    {
      id: 3,
      title: 'Inception',
      director: 'Christopher Nolan',
      description: 'Фантастичний трилер про сни та підсвідомість'
    }
  ];

  getItems() {
    return this.movies;
  }

  getItemById(id: number) {
    return this.movies.find(movie => movie.id === id);
  }

  addItem(movie: any) {
    const newId = this.movies.length > 0
      ? this.movies[this.movies.length - 1].id + 1
      : 1;

    movie.id = newId;
    this.movies.push(movie);
  }
}