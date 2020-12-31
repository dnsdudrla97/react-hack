/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import Router from 'Components/Router';
import Header from 'Components/Header';

class App extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <>
        <Header />
        <Router />
      </>
    );
  }
}

export default App;
