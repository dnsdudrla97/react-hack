import React from 'react';
import SearchPresenter from './SearchPresenter';

/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 */
class searchState extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: '',
    error: null,
    loading: false,
  };
  /**
   * Adds two numbers together.
   * @param {int} num1 The first number.
   * @param {int} num2 The second number.
   * @return {void}
   */
  render() {
    const {movieResults, tvResults, searchTerm, error, loading} = this.state;
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
      />
    );
  }
}

export default searchState;
