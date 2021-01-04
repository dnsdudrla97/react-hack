import {moviesApi, tvApi} from 'api';
import React from 'react';
import DetailPresenter from './DetailPresenter';

/**
 * Adds two numbers together.
 * @param {int} num1 The first number.
 * @param {int} num2 The second number.
 */
class DetailState extends React.Component {
  /**
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);
    const {location: {pathname}} = props;
    this.state = {
      result: null,
      error: null,
      loading: true,
      isMovie: pathname.includes('/movie/'),
    };
  }
  /**
   * Detail Router->Props
   */
  async componentDidMount() {
    const {
      match: {
        params: {id},
      },
      history: {push},
    } = this.props;
    const {isMovie} = this.state;
    // this.isMovie = pathname.includes('/movie/');
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push('/');
    }
    let result = null;
    try {
      if (isMovie) {
        ({data: result} = await moviesApi.movieDetail(parsedId));
      } else {
        ({data: result} = await tvApi.showDetail(parsedId));
      }
      console.log(result);
    } catch {
      this.setState({error: 'Can not find anything.'});
    } finally {
      this.setState({loading: false, result});
    }
  }
  /**
   * Adds two numbers together.
   * @param {int} num1 The first number.
   * @param {int} num2 The second number.
   * @return {void}
   */
  render() {
    console.log(this.state);
    const {result, error, loading} = this.state;
    return <DetailPresenter result={result} error={error} loading={loading} />;
  }
}

export default DetailState;
