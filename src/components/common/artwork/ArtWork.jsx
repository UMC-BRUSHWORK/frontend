import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './ArtWork.style';
import IMAGES from '../../../assets';
import { postFavorite } from '../../../apis/postFavorite';
import userDummy from '../../../constants/userDummy';

export default function ArtWork({
  image,
  title,
  authorNickname,
  productId,
  favorStatus,
  direction = 'row',
  size = '12rem',
}) {
  const [favorite, setFavorite] = useState(false);
  const url = `/product/${productId}`;

  const postFav = async ({ token, userId, productId: PID }) => {
    try {
      const res = await postFavorite({ token, userId, PID });
      console.log(res.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    console.log(favorStatus);
    setFavorite(!favorite);
    const userId = 24;
    const { token } = userDummy;
    postFav({ token, userId, productId });
  };

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
        <S.Favorite
          onClick={handleClick}
          src={favorite ? IMAGES.favoriteOn : IMAGES.favoriteOff}
          alt="favorite"
        />
      </S.InfoWrapper>
      <S.Artist>{authorNickname}</S.Artist>
    </S.Wrapper>
  );
}
