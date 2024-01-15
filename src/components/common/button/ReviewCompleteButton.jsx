import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ReviewContainer,
  GoMyReviewButton,
  RightButton,
} from './ReviewCompleteButton.style';
import RightButtonImg from '../../../assets/images/right_button_black.svg';

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
      <RightButton src={RightButtonImg} onClick={handleMoveToMyReview} />
    </ReviewContainer>
  );
}

export default ReviewCompleteButton;
