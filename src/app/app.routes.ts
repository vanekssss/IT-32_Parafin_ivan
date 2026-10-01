import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { MoviesComponent } from './pages/movies/movies';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail';
import { AddMovieComponent } from './pages/add-movie/add-movie';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'movies/add',
    component: AddMovieComponent
  },
  {
    path: 'movie/:id',
    component: MovieDetailComponent
  }
];