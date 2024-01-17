import React from 'react';
import * as P from './PurchaseReview.style';

const PurchaseReview = ({ nickname, date, review }) => {
  return (
    <>
      <P.PurchaseReviewContainer>
        <P.NicknameAndDate>
          {nickname} | {date}
        </P.NicknameAndDate>
        <P.ReviewText>{review}</P.ReviewText>
      </P.PurchaseReviewContainer>
    </>
  );
};

export default PurchaseReview;
