import React from 'react';
import PropTyes from 'prop-types';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
const Container = styled.div``;
const ImageContainer = styled.div``;
const Image = styled.div``;
const Rating = styled.span``;
const Title = styled.span``;
const Year = styled.span``;

const Poster = ({id, imageUrl, title, rating, year, isMovie = false}) => (
  <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
    <Container>
      <ImageContainer>
        <Image bgUrl={imageUrl} />
        <Rating>
          <span role='img' aria-label='rating'>
            ⭐
          </span>
          {''}
          {rating}/10
        </Rating>
      </ImageContainer>
      <Title>{title}</Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);

Poster.prototype = {
  id: PropTyes.number.isRequired,
  imageUrl: PropTyes.string,
  title: PropTyes.string.isRequired,
  rating: PropTyes.number,
  year: PropTyes.string,
  isMovie: PropTyes.bool,
};

export default Poster;
