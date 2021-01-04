import React from 'react';
import DetailPresenter from './DetailPresenter';

/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 */
class DetailState extends React.Component {
  state = {
    result: null,
    error: null,
    loading: true,
  };
  /**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 * @return {void}
 */
  render() {
    const {result, error, loading} = this.state;
    return (
      <DetailPresenter
        result={result}
        error={error}
        loading={loading}
      />
    );
  }
}

export default DetailState;
