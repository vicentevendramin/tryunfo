import React from 'react';
import Form from './components/Form';
import logoTryunfo from './assets/logo_tryunfo.svg';

class App extends React.Component {
  render() {
    return (
      <>
        <img src={ logoTryunfo } alt="Logo Tryunfo" />
        <div>
          <Form />
        </div>
      </>
    );
  }
}

export default App;
