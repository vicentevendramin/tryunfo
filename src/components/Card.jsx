import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Card extends Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    const superTrunfo = <span data-testid="trunfo-card">Super Trunfo</span>;

    return (
      <div className="card-preview">
        <div className="card-background">
          <div className="card-body">
            <p className="card-name" data-testid="name-card">{ cardName }</p>
            <img
              className="card-image"
              data-testid="image-card"
              src={ cardImage }
              alt={ cardName }
            />
            <p
              className="card-description"
              data-testid="description-card"
            >
              { cardDescription }
            </p>
            <div className="card-attrs">
              <p data-testid="attr1-card">
                Attr1
                {' '}
                ...................................................
                {' '}
                { cardAttr1 }
              </p>
              <p data-testid="attr2-card">
                Attr2
                {' '}
                ...................................................
                {' '}
                { cardAttr2 }
              </p>
              <p data-testid="attr3-card">
                Attr3
                {' '}
                ...................................................
                {' '}
                { cardAttr3 }
              </p>
              <p data-testid="rare-card">
                Raridade
                {' '}
                .........................................
                {' '}
                { cardRare }
              </p>
              {cardTrunfo ? superTrunfo : ''}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
}.isRequired;
