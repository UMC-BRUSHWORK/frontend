import React, { useState } from 'react';
import * as R from './ReviewButton.style';

function ReviewButton({ onReviewSelect, artistName }) {
  const [selectedReview, setSelectedReview] = useState(5);
  const handleReviewSelect = (review) => {
    setSelectedReview(review);
    onReviewSelect(review);
  };

  return (
    <>
      <R.ReviewWrapper>
        {`${artistName}`}님과의 거래는 어땠나요?
      </R.ReviewWrapper>
      <R.ReviewContainer>
        <R.ReviewTextButton
          selected={selectedReview === 5}
          onClick={() => handleReviewSelect(5)}
        >
          좋았어요
        </R.ReviewTextButton>
        <R.ReviewTextButton
          selected={selectedReview === 3}
          onClick={() => handleReviewSelect(3)}
        >
          그냥 그래요
        </R.ReviewTextButton>
        <R.ReviewTextButton
          selected={selectedReview === 1}
          onClick={() => handleReviewSelect(1)}
        >
          별로였어요
        </R.ReviewTextButton>
      </R.ReviewContainer>
    </>
  );
}

export default ReviewButton;
