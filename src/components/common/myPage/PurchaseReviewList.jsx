import React, { useEffect, useState } from 'react';
import PurchaseReview from './PurchaseReview';
import * as P from './PurchaseReviewList.style';
import { getArtistReviewList } from '../../../apis/getArtistReviewList';

function PurchaseReviewList() {
  const [reviewList, setReviewList] = useState();

  const getArtistReview = async (userId, token) => {
    const { result } = await getArtistReviewList(userId, token);
    setReviewList(result.reviewListData);
    console.log(reviewList);
  };

  useEffect(() => {
    const userId = parseInt(localStorage.getItem('userId'), 10);
    const token = localStorage.getItem('token');
    getArtistReview(userId, token);
  }, []);

  return (
    <P.Wrapper>
      <P.ScrollableReviewList>
        {reviewList && reviewList.length !== 0 ? (
          reviewList.map((data) => (
            <PurchaseReview
              key={data.reviewId}
              nickname={data.consumerNickname}
              date={data.date}
              review={data.context}
            />
          ))
        ) : (
          <P.Text>거래 후기가 없습니다</P.Text>
        )}
      </P.ScrollableReviewList>
    </P.Wrapper>
  );
}

export default PurchaseReviewList;
