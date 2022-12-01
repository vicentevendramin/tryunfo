import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <form>
        <label className="label-on-top" htmlFor="name">
          Nome
          <input
            className="input-type1"
            data-testid="name-input"
            type="text"
            name="name"
            id="name"
            value={ cardName }
            onChange={ onInputChange }
          />
        </label>
        <label className="label-on-top" htmlFor="description">
          Descrição
          <textarea
            className="input-textarea"
            data-testid="description-input"
            name="description"
            id="description"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>
        <label className="label-left" htmlFor="attr1">
          Attr1
          <input
            className="input-type2"
            data-testid="attr1-input"
            type="number"
            name="attr1"
            id="attr1"
            value={ cardAttr1 }
            onChange={ onInputChange }
          />
        </label>
        <label className="label-left" htmlFor="attr2">
          Attr2
          <input
            className="input-type2"
            data-testid="attr2-input"
            type="number"
            name="attr2"
            id="attr2"
            value={ cardAttr2 }
            onChange={ onInputChange }
          />
        </label>
        <label className="label-left" htmlFor="attr3">
          Attr3
          <input
            className="input-type2"
            data-testid="attr3-input"
            type="number"
            name="attr3"
            id="attr3"
            value={ cardAttr3 }
            onChange={ onInputChange }
          />
        </label>
        <label className="label-left" htmlFor="image">
          Imagem
          <input
            className="input-type2 input-image"
            data-testid="image-input"
            type="text"
            name="image"
            id="image"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>
        <label className="label-on-top" htmlFor="rare">
          Raridade
          <select
            className="input-type1"
            data-testid="rare-input"
            name="rare"
            id="rare"
            value={ cardRare }
            onChange={ onInputChange }
          >
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <div className="submit-container">
          <label className="label-left" htmlFor="trunfo">
            <input
              className="input-checkbox"
              data-testid="trunfo-input"
              type="checkbox"
              name="trunfo"
              id="trunfo"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            Super Trybe Trunfo
          </label>
          <button
            data-testid="save-button"
            type="submit"
            id="submit"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </div>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.number,
  cardAttr2: PropTypes.number,
  cardAttr3: PropTypes.number,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;
