import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchSelect extends Component {
  render() {
    const { onChange, selected } = this.props;
    return (
      <div className="div-item">
        <label
          className="label"
          htmlFor="select-genre"
          data-testid="select-input-label"
        >
          <span className="s-text">Filtrar por gênero:</span>
          <div className="select">
            <select
              className="select"
              data-testid="select-input"
              name="select-genre"
              value={ selected }
              onChange={ onChange }
            >
              <option data-testid="select-option" value="">
                Todos
              </option>
              <option data-testid="select-option" value="action">
                Ação
              </option>
              <option data-testid="select-option" value="comedy">
                Comédia
              </option>
              <option data-testid="select-option" value="thriller">
                Suspense
              </option>
            </select>
          </div>
        </label>
      </div>
    );
  }
}

SearchSelect.propTypes = {
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default SearchSelect;
