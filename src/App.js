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

  render() {
    return (
      <>
        <img src={ logoTryunfo } alt="Logo Tryunfo" />
        <div>
          <Form
            onInputChange={ this.onInputChange }
            { ...this.state }
          />
          <Card
            { ...this.state }
          />
        </div>
      </>
    );
  }
}

export default App;
