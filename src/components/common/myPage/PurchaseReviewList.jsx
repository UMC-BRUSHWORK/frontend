import React from 'react';
import PurchaseReview from './PurchaseReview';
import PurchaseReviewButton from '../button/PurchaseReviewButton';
import * as P from './PurchaseReviewList.style';

function PurchaseReviewList() {
  return (
    <>
      <PurchaseReviewButton />
      <P.ScrollableReviewList>
        {dummyData.map((data) => (
          <PurchaseReview
            key={data.id}
            nickname={data.nickname}
            date={data.date}
            review={data.review}
          />
        ))}
      </P.ScrollableReviewList>
    </>
  );
}

export default PurchaseReviewList;
