import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ReviewList from '../../components/artist/reviewList/ReviewList';
import Temperature from '../../components/artist/temperature/Temperature';
import { getArtistReviewList } from '../../apis/getArtistReviewList';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.8rem;
  margin-top: 1.7rem;
  margin-bottom: 6rem;
`;

export default function ArtistReviewList() {
  const [reviewList, setReviewList] = useState();

  const getArtistReview = async (userId) => {
    const { result } = await getArtistReviewList(userId);
    setReviewList(result.reviewListData);
  };

  useEffect(() => {
    const userId = parseInt(localStorage.getItem('userId'), 10);
    getArtistReview(userId);
  }, []);
  return (
    <Wrapper>
      <Temperature percent="70%" />
      {reviewList && <ReviewList data={reviewList} />}
    </Wrapper>
  );
}
