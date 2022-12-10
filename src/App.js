import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import logoTryunfo from './assets/logo_tryunfo.svg';
import './App.css';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    hasTrunfo: false,
    isSaveButtonDisabled: true,
    registeredCards: [],
    nameFilter: '',
  };

  validationFields = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const max = 90;
    const maxSum = 210;
    const attr1 = Number(cardAttr1) >= 0 && Number(cardAttr1) <= max;
    const attr2 = Number(cardAttr2) >= 0 && Number(cardAttr2) <= max;
    const attr3 = Number(cardAttr3) >= 0 && Number(cardAttr3) <= max;
    const sum = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3) <= maxSum;
    const empty = cardName !== '' && cardDescription !== '' && cardImage !== '';

    this.setState({ isSaveButtonDisabled: !(attr1 && attr2 && attr3 && sum && empty) });
  };

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value }, this.validationFields);
  };

  trunfoValidation = () => {
    const { registeredCards } = this.state;
    const catchTrunfo = registeredCards.some((card) => card.cardTrunfo === true);
    this.setState({ hasTrunfo: catchTrunfo });
  };

  onSaveButtonClick = (e) => {
    e.preventDefault();

    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState((prev) => ({
      registeredCards: [...prev.registeredCards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: prev.cardTrunfo,
    }), this.trunfoValidation);
  };

  removeCard = ({ target: { name } }) => {
    const { registeredCards } = this.state;
    this.setState({
      registeredCards: registeredCards.filter((card) => card.cardName !== name),
    }, this.trunfoValidation);
  };

  render() {
    const { registeredCards, nameFilter } = this.state;

    return (
      <>
        <img src={ logoTryunfo } alt="Logo Tryunfo" id="tryunfo-logo" />
        <main>
          <section className="form-section">
            <Form
              onInputChange={ this.onInputChange }
              onSaveButtonClick={ this.onSaveButtonClick }
              { ...this.state }
            />
            <div className="container-preview">
              <h2>Pré-visualização</h2>
              <Card
                { ...this.state }
              />
            </div>
          </section>
          <section className="registered-cards">
            <h2>Todas as Cartas</h2>
            <div className="filter-cards">
              <input
                data-testid="name-filter"
                type="text"
                name="nameFilter"
                onChange={ this.onInputChange }
              />
            </div>
            <div className="cards-section">
              {registeredCards
                .filter((card) => card.cardName.includes(nameFilter))
                .map((card) => (
                  <li key={ card.cardName } className="li-card">
                    <Card { ...card } />
                    <button
                      type="button"
                      data-testid="delete-button"
                      name={ card.cardName }
                      onClick={ this.removeCard }
                      className="btn-delete-card"
                    >
                      Excluir
                    </button>
                  </li>
                ))}
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default App;
