import React from 'react';
import PurchaseReview from './PurchaseReview';
import PurchaseReviewButton from '../button/PurchaseReviewButton';
import * as P from './PurchaseReviewList.style';
import myReviewDummy from '../../../constants/myReviewDummy';

function PurchaseReviewList() {
  return (
    <P.Wrapper>
      <PurchaseReviewButton />
      <P.ScrollableReviewList>
        {myReviewDummy.map((data) => (
          <PurchaseReview
            key={data.id}
            nickname={data.nickname}
            date={data.date}
            review={data.review}
          />
        ))}
      </P.ScrollableReviewList>
    </P.Wrapper>
  );
}

export default PurchaseReviewList;
