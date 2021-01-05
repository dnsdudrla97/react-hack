import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Section from 'Components/Section';
import Loader from 'Components/loader';
import Message from 'Components/Message';
import Poster from 'Components/Poster';

const Container = styled.div`
  padding: 0px 20px;
`;
const HomePresenter = ({nowPlaying, popular, upComing, error, loading}) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Playing">
          {nowPlaying.map((movie) => (
            <Poster key={movie.id}/>
          ))}
        </Section>
      )}
      {upComing && upComing.length > 0 && (
        <Section title="upComing movies">
          {upComing.map((movie) => (
            <Poster key={movie.id}/>
          ))}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="popular movies">
          {popular.map((movie) => (
            <Poster key={movie.id}/>
          ))}
        </Section>
      )}
      {error && <Message color="#e74c3c" text={error} />}
    </Container>
  );

HomePresenter.prototype = {
  nowPlaying: PropTypes.array,
  upComing: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default HomePresenter;
