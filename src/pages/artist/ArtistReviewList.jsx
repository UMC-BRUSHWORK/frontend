import React from 'react';
import styled from 'styled-components';
import ReviewList from '../../components/artist/reviewList/ReviewList';
import reviewDummy from '../../constants/reviewsDummy';
import Temperature from '../../components/artist/temperature/Temperature';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  margin-top: 1.7rem;
`;

export default function ArtistReviewList() {
  return (
    <Wrapper>
      <Temperature percent="70%" />
      <ReviewList data={reviewDummy} />
    </Wrapper>
  );
}
