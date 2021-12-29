import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RatingComponent extends Component {
  render() {
    const { value, onChange, children } = this.props;
    return (
      <label className="label" htmlFor="rating" data-testid="rating-input-label">
        {children}
        <input
          className="input"
          name="rating"
          type="number"
          data-testid="rating-input"
          value={ value }
          onChange={ onChange }
        />
      </label>
    );
  }
}

RatingComponent.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default RatingComponent;
