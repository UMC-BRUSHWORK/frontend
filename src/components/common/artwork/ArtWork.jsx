import React, { useState } from 'react';
import * as S from './ArtWork.style';
import IMAGES from '../../../assets';

export default function ArtWork({
  artSrc = 'artWork2',
  artName = '작품 이름',
  artist = '작가명',
  direction = 'row',
}) {
  const imgSrc = IMAGES[artSrc];
  const [favorite, setFavorite] = useState('off');

  const handleClick = () => {
    setFavorite('on');
  };

  return (
    <S.Wrapper>
      <S.Image
        src={imgSrc}
        alt="artWork"
        width={direction === 'row' ? 'auto' : '100%'}
        height={direction === 'row' ? '12rem' : 'auto'}
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
