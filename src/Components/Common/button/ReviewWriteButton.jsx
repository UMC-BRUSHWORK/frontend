import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ReviewContainer,
  GoReviewButton,
  RightButton,
} from './ReviewWriteButton.style';
import RightButtonImg from '../../../assets/images/right_button.svg';

function ReviewWriteButton() {
  const navigate = useNavigate();
  const handleMoveToReview = () => {
    navigate('/review');
  };

  return (
    <ReviewContainer>
      <GoReviewButton onClick={handleMoveToReview}>
        후기 작성하기
      </GoReviewButton>
      <RightButton src={RightButtonImg} onClick={handleMoveToReview} />
    </ReviewContainer>
  );
}

export default ReviewWriteButton;
