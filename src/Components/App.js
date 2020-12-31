/* eslint-disable require-jsdoc */
import React, {Component} from 'react';
import Router from 'Components/Router';
import GlobalStyles from 'Components/GlobalStyles';

class App extends Component {
  // eslint-disable-next-line require-jsdoc
  render() {
    return (
      <>
        <Router />
        <GlobalStyles />
      </>
    );
  }
}

export default App;
