import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './ArtWork.style';
import Favorite from '../../favorite/Favorite';

export default function ArtWork({
  image,
  title,
  authorNickname,
  productId,
  favorStatus,
  direction = 'row',
  size = '12rem',
}) {
  const url = `/product/${productId}`;

  return (
    <S.Wrapper>
      <Link to={url}>
        <S.Image
          src={image}
          alt="artWork"
          width={direction === 'row' ? 'auto' : '100%'}
          height={direction === 'row' ? size : 'auto'}
        />
      </Link>
      <S.InfoWrapper>
        <S.ArtName>{title}</S.ArtName>
        <Favorite favorStatus={favorStatus} productId={productId} />
      </S.InfoWrapper>
      <S.Artist>{authorNickname}</S.Artist>
    </S.Wrapper>
  );
}
