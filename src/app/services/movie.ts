import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private items = signal([
    {
      id: 1,
      title: 'Interstellar',
      year: 2014,
      rating: 9
    },
    {
      id: 2,
      title: 'Avatar',
      year: 2009,
      rating: 8
    },
    {
      id: 3,
      title: 'Titanic',
      year: 1997,
      rating: 7
    }
  ]);

  getItems() {
    return this.items();
  }

  addItem(title: string, year: number, rating: number) {
    const newItem = {
      id: this.items().length + 1,
      title: title,
      year: year,
      rating: rating
    };

    this.items.update(items => [...items, newItem]);
  }

  removeItem(id: number) {
    this.items.update(items =>
      items.filter(item => item.id !== id)
    );
  }
}