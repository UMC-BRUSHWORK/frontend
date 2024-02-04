import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './ArtWork.style';
import IMAGES from '../../../assets';

export default function ArtWork({
  image,
  title,
  authorNickname,
  productId,
  direction = 'row',
  size = '12rem',
  hideFavorite = false,
}) {
  const [favorite, setFavorite] = useState(false);
  const url = `/product/${productId}`;

  const handleClick = () => {
    setFavorite(!favorite);
  };

  return (
    <Link to={url}>
      <S.Wrapper>
        <S.Image
          src={image}
          alt="artWork"
          width={direction === 'row' ? 'auto' : '100%'}
          height={direction === 'row' ? size : 'auto'}
        />
        <S.InfoWrapper>
          <S.ArtName>{title}</S.ArtName>
          <S.Favorite
            onClick={handleClick}
            src={favorite ? IMAGES.favoriteOn : IMAGES.favoriteOff}
            alt="favorite"
          />
        </S.InfoWrapper>
        <S.Artist>{authorNickname}</S.Artist>
      </S.Wrapper>
    </Link>
  );
}
