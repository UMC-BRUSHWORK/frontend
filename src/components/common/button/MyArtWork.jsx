import React from 'react';
import { useNavigate } from 'react-router-dom';
import RightButtonImg from '../../../assets/images/right_button_black.svg';
import * as A from './MyArtWork.style';

function MyArtWork() {
  const navigate = useNavigate();
  const handleMoveToArtist = () => {
    navigate('/artist');
  };

  return (
    <A.ArtWorkContainer>
      <A.GoArtistButton onClick={handleMoveToArtist}>내 작품</A.GoArtistButton>
      <A.RightButton src={RightButtonImg} onClick={handleMoveToArtist} />
    </A.ArtWorkContainer>
  );
}

export default MyArtWork;
