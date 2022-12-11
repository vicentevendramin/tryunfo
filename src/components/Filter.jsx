import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {
  render() {
    const { onInputChange, rareFilter, trunfoFilter } = this.props;

    return (
      <form className="filter-form">
        <h3>Filtro de buscas</h3>
        <div className="filter-section">
          <label className="filter-label" htmlFor="nameFilter">
            Nome
            <input
              data-testid="name-filter"
              className="input-type3"
              disabled={ trunfoFilter }
              id="name-filter"
              type="text"
              name="nameFilter"
              placeholder="Nome da Carta"
              onChange={ onInputChange }
            />
          </label>
          <label className="filter-label" htmlFor="rareFilter">
            Raridade
            <select
              data-testid="rare-filter"
              className="input-type3"
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
          <label className="filter-label" htmlFor="trunfoFilter">
            <input
              data-testid="trunfo-filter"
              className="input-checkbox"
              id="trunfoFilter"
              type="checkbox"
              name="trunfoFilter"
              checked={ trunfoFilter }
              onChange={ onInputChange }
            />
            Super Trunfo
          </label>
        </div>
      </form>
    );
  }
}

Filter.propTypes = {
  onInputChange: PropTypes.func,
  rareFilter: PropTypes.string,
  trunfoFilter: PropTypes.bool,
}.isRequired;
