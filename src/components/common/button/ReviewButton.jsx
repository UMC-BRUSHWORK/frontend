import React, { useState } from 'react';
import * as R from './ReviewButton.style';

function ReviewButton({ onReviewSelect, artistName }) {
  const [selectedReview, setSelectedReview] = useState('좋았어요');

  const handleReviewSelect = (review) => {
    setSelectedReview(review);
    onReviewSelect(review);
  };

  //   const calculateScore = () => {
  //     switch (selectedReview) {
  //       case '좋았어요':
  //         return 100;
  //       case '그냥 그래요':
  //         return 50;
  //       case '별로였어요':
  //         return 10;
  //       default:
  //         return 50;
  //     }
  //   };

  return (
    <>
      <R.ReviewWrapper>
        {`{{${artistName}}}`}과의 거래는 어땠나요?
      </R.ReviewWrapper>
      <R.ReviewContainer>
        <R.ReviewTextButton
          selected={selectedReview === '좋았어요'}
          onClick={() => handleReviewSelect('좋았어요')}
        >
          좋았어요
        </R.ReviewTextButton>
        <R.ReviewTextButton
          selected={selectedReview === '그냥 그래요'}
          onClick={() => handleReviewSelect('그냥 그래요')}
        >
          그냥 그래요
        </R.ReviewTextButton>
        <R.ReviewTextButton
          selected={selectedReview === '별로였어요'}
          onClick={() => handleReviewSelect('별로였어요')}
        >
          별로였어요
        </R.ReviewTextButton>
      </R.ReviewContainer>
    </>
  );
}

export default ReviewButton;
