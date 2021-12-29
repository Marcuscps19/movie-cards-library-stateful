import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchFavorite extends Component {
  render() {
    const { onChange, checked } = this.props;
    return (
      <div className="div-item">
        <label
          className="label"
          htmlFor="search-checkbox"
          data-testid="checkbox-input-label"
        >
          <span className="s-text"> Mostrar somente favoritos:</span>
          <input
            className="checkbox"
            data-testid="checkbox-input"
            name="search-checkbox"
            onChange={ onChange }
            type="checkbox"
            checked={ checked }
          />
        </label>
      </div>
    );
  }
}

SearchFavorite.propTypes = {
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchFavorite;
