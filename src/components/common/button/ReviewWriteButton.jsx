import React from 'react';
import { Link } from 'react-router-dom';
import {
  ReviewContainer,
  GoReviewButton,
  RightButton,
} from './ReviewWriteButton.style';
import IMAGES from '../../../assets';

function ReviewWriteButton({ reviewStatus, productId }) {
  const url = reviewStatus === 0 ? `/write-review/${productId}` : ``;

  return (
    <Link to={url}>
      {reviewStatus === 0 ? (
        <ReviewContainer>
          <GoReviewButton status={reviewStatus}>후기 작성하기</GoReviewButton>
          <RightButton src={IMAGES.rightButtonBlack} />
        </ReviewContainer>
      ) : (
        <GoReviewButton status={reviewStatus}>후기 작성 완료</GoReviewButton>
      )}
    </Link>
  );
}

export default ReviewWriteButton;
