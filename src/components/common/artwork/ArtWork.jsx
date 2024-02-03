import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as S from './ArtWork.style';
import IMAGES from '../../../assets';
import { getProduct } from '../../../apis/getProduct';

export default function ArtWork({
  image,
  title,
  authorNickname,
  direction = 'row',
  size = '12rem',
  productId = 0,

  link = '/artwork-detail',
}) {
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!favorite);
  };

  const getProductId = async (Id) => {
    try {
      const res = await getProduct(Id);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
    getProductId(productId);
  }, []);

  return (
    <Link to={link}>
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
