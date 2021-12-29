import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Storyline extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <label className="label" htmlFor="storyline" data-testid="storyline-input-label">
        {children}
        <textarea
          className="textarea"
          name="storyline"
          data-testid="storyline-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

Storyline.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Storyline;
