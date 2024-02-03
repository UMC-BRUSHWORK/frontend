import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as P from './PurchaseReviewButton.style';
import IMAGES from '../../../assets';

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
      <P.RightButton
        src={IMAGES.rightButtonBlack}
        onClick={handleMoveToArtist}
      />
    </P.PurchaseContainer>
  );
}

export default PurchaseReviewButton;
