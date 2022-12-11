import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    const { onInputChange, rareFilter, trunfoFilter } = this.props;

    return (
      <form>
        <h3>Filtro de buscas</h3>
        <label htmlFor="nameFilter">
          <input
            data-testid="name-filter"
            disabled={ trunfoFilter }
            id="name-filter"
            type="text"
            name="nameFilter"
            placeholder="Nome da Carta"
            onChange={ onInputChange }
          />
        </label>
        <label htmlFor="rareFilter">
          <select
            data-testid="rare-filter"
            disabled={ trunfoFilter }
            id="rare-filter"
            name="rareFilter"
            value={ rareFilter }
            onChange={ onInputChange }
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfoFilter">
          <input
            data-testid="trunfo-filter"
            id="trunfoFilter"
            type="checkbox"
            name="trunfoFilter"
            checked={ trunfoFilter }
            onChange={ onInputChange }
          />
          Super Trunfo
        </label>
      </form>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func,
  rareFilter: PropTypes.string,
  trunfoFilter: PropTypes.bool,
}.isRequired;
