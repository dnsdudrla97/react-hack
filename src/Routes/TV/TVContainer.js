import {tvApi} from 'api';
import React from 'react';
import TVPresenter from './TVPresenter';

/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 */
class tvState extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true,
  };
  /**
   * tvApi state
   */
  async componentDidMount() {
    try {
      const {
        data: {results: topRated},
      } = await tvApi.topRated();
      const {
        data: {results: popular},
      } = await tvApi.popular();
      const {
        data: {results: airingToday},
      } = await tvApi.airingToday();
      this.setState({topRated, popular, airingToday});
    } catch {
      this.setState({
        error: 'Can not find TV information',
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
    const {topRated, popular, airingToday, error, loading} = this.state;
    console.log(this.state);
    return (
      <TVPresenter
        topRated={topRated}
        airingToday={airingToday}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default tvState;
