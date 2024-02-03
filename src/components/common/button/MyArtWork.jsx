import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as A from './MyArtWork.style';
import IMAGES from '../../../assets';

function MyArtWork() {
  const navigate = useNavigate();
  const handleMoveToArtist = () => {
    navigate('/artist');
  };

  return (
    <A.ArtWorkContainer>
      <A.GoArtistButton onClick={handleMoveToArtist}>내 작품</A.GoArtistButton>
      <A.RightButton
        src={IMAGES.rightButtonBlack}
        onClick={handleMoveToArtist}
      />
    </A.ArtWorkContainer>
  );
}

export default MyArtWork;
