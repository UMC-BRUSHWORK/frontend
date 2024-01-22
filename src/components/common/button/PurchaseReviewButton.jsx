import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as P from './PurchaseReviewButton.style';
import RightButtonImg from '../../../assets/images/right_button_black.svg';

function PurchaseReviewButton() {
  const navigate = useNavigate();

  const handleMoveToArtist = () => {
    navigate('/artist');
  };

  return (
    <P.PurchaseContainer>
      <P.GoArtistButton onClick={handleMoveToArtist}>
        거래 후기
      </P.GoArtistButton>
      <P.RightButton src={RightButtonImg} onClick={handleMoveToArtist} />
    </P.PurchaseContainer>
  );
}

export default PurchaseReviewButton;
