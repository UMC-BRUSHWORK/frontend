import React from 'react';
import * as P from './PurchaseReview.style';

function PurchaseReview({ nickname, date, review }) {
  return (
    <P.PurchaseReviewContainer>
      <P.ContextWrapper>
        <P.NicknameAndDate>
          {nickname} | {date}
        </P.NicknameAndDate>
        <P.ReviewText>{review}</P.ReviewText>
      </P.ContextWrapper>
    </P.PurchaseReviewContainer>
  );
}

export default PurchaseReview;
