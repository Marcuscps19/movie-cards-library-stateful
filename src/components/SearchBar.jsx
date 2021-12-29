import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SearchText from './SearchText';
import SearchFavorite from './SearchFavorite';
import SearchSelect from './SearchSelect';

class SearchBar extends Component {
  render() {
    const {
      searchText,
      onSearchTextChange,
      bookmarkedOnly,
      onBookmarkedChange,
      selectedGenre,
      onSelectedGenreChange,
    } = this.props;
    return (
      <form className="search-form" data-testid="search-bar-form">
        <h1>Procurar</h1>
        <SearchText onChange={ onSearchTextChange } searchText={ searchText } />

        <SearchFavorite
          onChange={ onBookmarkedChange }
          checked={ bookmarkedOnly }
        />
        <SearchSelect
          onChange={ onSelectedGenreChange }
          selected={ selectedGenre }
        />
      </form>
    );
  }
}

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
