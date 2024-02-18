import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as A from './PageLinkButton.style';
import IMAGES from '../../../assets';

function PageLinkButton({ page, userId }) {
  const navigate = useNavigate();
  const handleMoveToArtist = () => {
    navigate(`/artist/${userId}`);
  };

  return (
    <A.ArtWorkContainer>
      <A.GoArtistButton onClick={handleMoveToArtist}>{page}</A.GoArtistButton>
      <A.RightButton
        src={IMAGES.rightButtonBlack}
        onClick={handleMoveToArtist}
      />
    </A.ArtWorkContainer>
  );
}

export default PageLinkButton;
