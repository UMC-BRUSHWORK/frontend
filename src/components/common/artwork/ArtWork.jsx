import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ArtWork.style';
import IMAGES from '../../../assets';

export default function ArtWork({
  artSrc = 'artWork2',
  artName = '',
  artist = '',
  direction = 'row',
}) {
  const imgSrc = IMAGES[artSrc];
  const [favorite, setFavorite] = useState('off');

  const handleClick = () => {
    setFavorite('on');
  };

  const navigate = useNavigate();
  const handleMoveToArtWorkDetail = () => {
    navigate('/artworkDetail');
  };

  return (
    <S.Wrapper>
      <S.Image
        src={imgSrc}
        alt="artWork"
        width={direction === 'row' ? 'auto' : '100%'}
        height={direction === 'row' ? '9rem' : 'auto'}
        onClick={handleMoveToArtWorkDetail}
      />
      <S.InfoWrapper>
        <S.ArtName>{artName}</S.ArtName>
        <S.Favorite
          onClick={handleClick}
          src={favorite === 'off' ? IMAGES.favoriteOff : IMAGES.favoriteOn}
          alt="favorite"
        />
      </S.InfoWrapper>
      <S.Artist>{artist}</S.Artist>
    </S.Wrapper>
  );
}
