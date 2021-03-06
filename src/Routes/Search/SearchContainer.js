import {moviesApi, tvApi} from 'api';
import React from 'react';
// import {ThemeConsumer} from 'styled-components';
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
   * handleSubmit, 사용자가 폼에서 text를 입력하고, 엔터를 누르면 동작
   * handleSubmit은 searchTermd이 빈칸(공백) 여부 체크 후 search 함수 실행
   * @param {void} event event 처리
   */
  handleSubmit = (event) => {
    event.preventDefault();
    const {searchTerm} = this.state;
    if (searchTerm != '') {
      this.searchByTerm();
    }
  };
  /**
   * input 데이터 업데이트
   * @param {void} event event 처리
   */
  updateTerm = (event) => {
    const {target: {value}} = event;
    this.setState({
      searchTerm: value,
    });
  };

  searchByTerm = async () => {
    const {searchTerm} = this.state;
    try {
      const {
        data: {results: movieResults},
      } = await moviesApi.search(searchTerm);
      const {
        data: {results: tvResults},
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults,
      });
      this.setState({loading: true});
    } catch {
      this.setState({error: 'Can not find Results'});
    } finally {
      this.setState({loading: false});
    }
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
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
        loading={loading}
        error={error}
      />
    );
  }
}

export default searchState;
