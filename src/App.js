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

  onInputChange = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({ [name]: value });
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
