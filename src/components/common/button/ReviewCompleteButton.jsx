import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ReviewContainer,
  GoMyReviewButton,
  RightButton,
} from './ReviewCompleteButton.style';
import IMAGES from '../../../assets';

function ReviewCompleteButton() {
  const navigate = useNavigate();
  const handleMoveToMyReview = () => {
    navigate('/myReview');
  };

  return (
    <ReviewContainer>
      <GoMyReviewButton onClick={handleMoveToMyReview}>
        후기 작성 완료
      </GoMyReviewButton>
      <RightButton
        src={IMAGES.rightButtonBlack}
        onClick={handleMoveToMyReview}
      />
    </ReviewContainer>
  );
}

export default ReviewCompleteButton;
