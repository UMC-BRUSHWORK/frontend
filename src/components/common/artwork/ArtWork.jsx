import React, { useState } from 'react';
import * as S from './ArtWork.style';
import IMAGES from '../../../assets';

export default function ArtWork({
  artSrc = 'artWork2',
  artName = '작품 이름',
  artist = '작가명',
  direction = 'row',
  size = '12rem',
  hideFavorite = false,
}) {
  const imgSrc = IMAGES[artSrc];
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!favorite);
  };

  return (
    <S.Wrapper>
      <S.Image
        src={imgSrc}
        alt="artWork"
        width={direction === 'row' ? 'auto' : '100%'}
        height={direction === 'row' ? size : 'auto'}
      />
      <S.InfoWrapper>
        <S.ArtName>{artName}</S.ArtName>
        {!hideFavorite && (
          <S.Favorite
            onClick={handleClick}
            src={favorite ? IMAGES.favoriteOn : IMAGES.favoriteOff}
            alt="favorite"
          />
        )}
      </S.InfoWrapper>
      <S.Artist>{artist}</S.Artist>
    </S.Wrapper>
  );
}
