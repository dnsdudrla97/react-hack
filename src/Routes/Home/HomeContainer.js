import {moviesApi} from 'api';
import React from 'react';
import HomePresenter from './HomePresenter';

/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 */
class homeState extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popular: null,
    error: null,
    loading: true,
  };
  /**
   * 전체 API 요청을 진행
   * 각각의 요청을 분리된 함수로 만들어서 따로 요청할 수 있다.
   */
  async componentDidMount() {
    try {
      const {
        data: {results: nowPlaying},
      } = await moviesApi.nowPlaying();
      const {
        data: {results: upComing},
      } = await moviesApi.upComing();
      const {
        data: {results: popular},
      } = await moviesApi.popular();
      this.setState({
        nowPlaying,
        upComing,
        popular,
      });
    } catch {
      this.setState({
        error: 'Can not find movies information.',
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }
  /**
   * Adds two numbers together.
   * @param {int} num1 The first number.
   * @param {int} num2 The second number.
   * @return {void}
   */
  render() {
    const {nowPlaying, upComing, popular, error, loading} = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upComing={upComing}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default homeState;
