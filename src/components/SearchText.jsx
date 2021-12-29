import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchText extends Component {
  render() {
    const { onChange, searchText } = this.props;
    return (
      <div className="div-item">
        <label
          className="label"
          htmlFor="search-text"
          data-testid="text-input-label"
        >
          <span className="s-text">Inclui o texto:</span>
          <input
            className="input"
            data-testid="text-input"
            name="search-text"
            value={ searchText }
            onChange={ onChange }
            type="text"
          />
        </label>
      </div>
    );
  }
}

SearchText.propTypes = {
  searchText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchText;
