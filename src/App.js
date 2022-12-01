import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import logoTryunfo from './assets/logo_tryunfo.svg';

class App extends React.Component {
  render() {
    return (
      <>
        <img src={ logoTryunfo } alt="Logo Tryunfo" />
        <div>
          <Form />
          <Card />
        </div>
      </>
    );
  }
}

export default App;
