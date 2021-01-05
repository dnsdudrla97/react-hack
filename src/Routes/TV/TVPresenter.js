import React from 'react';
import Section from 'Components/Section';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'Components/loader';
import Message from 'Components/Message';

const Container = styled.div`
  padding: 0px 20px;
`;
const TVPresenter = ({topRated, popular, airingToday, error, loading}) =>
  loading ? <Loader /> : (
    <Container>
      {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
          {topRated.map((show) => show.name)}
        </Section>
      )}
      {popular && popular.length > 0 && (
        <Section title="popular Shows">
          {popular.map((show) => show.name)}
        </Section>
      )}
      {airingToday && airingToday.length > 0 && (
        <Section title="airingToday Shows">
          {airingToday.map((show) => show.name)}
        </Section>
      )}
      {error && <Message color='#e74c3c' text={error}/>}
    </Container>
  );

TVPresenter.prototype = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};


export default TVPresenter;
