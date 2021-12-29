import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieList from './MovieList';
import SearchBar from './SearchBar';
import AddMovie from './AddMovie';

class MovieLibrary extends Component {
  constructor(props) {
    super(props);

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onBookmarkedChange = this.onBookmarkedChange.bind(this);
    this.onSelectedGenreChange = this.onSelectedGenreChange.bind(this);
    this.addMovie = this.addMovie.bind(this);
    this.state = {
      searchText: '',
      bookmarkedOnly: false,
      selectedGenre: '',
      movies: props.movies,
    };
  }

  onSearchTextChange({ target }) {
    const { value } = target;
    this.setState((state) => ({
      ...state,
      searchText: value,
    }), () => this.filterMovies());
  }

  onBookmarkedChange({ target }) {
    const { checked } = target;
    console.log(checked);
    this.setState((state) => ({
      ...state,
      bookmarkedOnly: checked,
    }), () => this.filterMovies());
  }

  onSelectedGenreChange({ target }) {
    const { value } = target;
    this.setState((state) => ({
      ...state,
      selectedGenre: value,
    }), () => this.filterMovies());
  }

  filterMovies() {
    const { movies } = this.props;
    this.setState((state) => ({
      ...state,
      movies: movies.filter((movie) => {
        if (this.movieIsBookmarked(movie)
            && this.movieHaveTextValue(movie)
            && this.filterByGenre(movie)
        ) {
          return movie;
        }
        return false;
      }),
    }));
  }

  movieIsBookmarked(movie) {
    const { bookmarked } = movie;
    const { bookmarkedOnly } = this.state;

    if (bookmarkedOnly) {
      return bookmarked;
    }
    return true;
  }

  filterByGenre(movie) {
    const genre = movie.genre.toLowerCase();
    const { selectedGenre } = this.state;

    return genre === selectedGenre.toLowerCase() || selectedGenre === '';
  }

  existSearchedTextOnMovie(text) {
    const { searchText } = this.state;
    return text.toLowerCase().includes(searchText.toLowerCase());
  }

  movieHaveTextValue(movie) {
    const { title, subtitle, storyline } = movie;

    return (this.existSearchedTextOnMovie(title)
    || this.existSearchedTextOnMovie(subtitle)
    || this.existSearchedTextOnMovie(storyline));
  }

  addMovie(movie) {
    this.setState((state) => ({
      movies: [...state.movies, movie],
    }));
  }

  render() {
    const { searchText, bookmarkedOnly, selectedGenre, movies: films } = this.state;
    const {
      onBookmarkedChange,
      onSearchTextChange,
      onSelectedGenreChange,
      addMovie,
    } = this;
    return (
      <div>

        <SearchBar
          searchText={ searchText }
          bookmarkedOnly={ bookmarkedOnly }
          selectedGenre={ selectedGenre }
          onSearchTextChange={ onSearchTextChange }
          onBookmarkedChange={ onBookmarkedChange }
          onSelectedGenreChange={ onSelectedGenreChange }
        />
        <MovieList movies={ films } />
        <AddMovie onClick={ addMovie } />
      </div>
    );
  }
}

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieLibrary;
