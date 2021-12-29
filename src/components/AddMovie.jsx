import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Title from './Title';
import Subtitle from './Subtitle';
import Image from './Image';
import Storyline from './Storyline';
import RatingComponent from './RatingComponent';
import Genre from './Genre';

class AddMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subtitle: '',
      title: '',
      imagePath: '',
      storyline: '',
      rating: 0,
      genre: 'action',
    };

    // Source: https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d
    this.baseState = this.state;
    this.handleChange = this.handleChange.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleButton() {
    const { onClick } = this.props;
    onClick(this.state);
    this.setState(this.baseState);
  }

  render() {
    const { title, subtitle, imagePath, storyline, rating, genre } = this.state;
    return (
      <form className="addMovie-form" data-testid="add-movie-form">
        <h1>Adicionar novo filme</h1>
        <Title value={ title } onChange={ this.handleChange }>
          <span className="s-text">Título:</span>
        </Title>
        <Subtitle value={ subtitle } onChange={ this.handleChange }>
          <span className="s-text">Subtítulo:</span>
        </Subtitle>
        <Image value={ imagePath } onChange={ this.handleChange }>
          <span className="s-text">Imagem:</span>
        </Image>
        <Storyline value={ storyline } onChange={ this.handleChange }>
          <span className="s-text">Sinopse:</span>
        </Storyline>
        <RatingComponent value={ rating } onChange={ this.handleChange }>
          <span className="s-text">Avaliação</span>
        </RatingComponent>
        <Genre value={ genre } onChange={ this.handleChange }>
          <span className="s-text">Gênero:</span>
        </Genre>
        <button
          className="button is-primary"
          type="button"
          data-testid="send-button"
          onClick={ this.handleButton }
        >
          Adicionar filme
        </button>
      </form>
    );
  }
}

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default AddMovie;
