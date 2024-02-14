import React, { useState } from 'react';
import * as S from './Favorite.style';
import IMAGES from '../../assets';
import userDummy from '../../constants/userDummy';
import { postFavorite } from '../../apis/postFavorite';

export default function Favorite({ favorStatus, productId }) {
  const [favorite, setFavorite] = useState(favorStatus);

  const postFav = async ({ token, userId, productId: PID }) => {
    try {
      const res = await postFavorite({ token, userId, PID });
      console.log(res.result);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = () => {
    setFavorite(!favorite);
    const { userId, token } = userDummy;
    postFav({ token, userId, productId });
  };

  return (
    <div>
      <S.Favorite
        onClick={handleClick}
        src={favorite ? IMAGES.favoriteOn : IMAGES.favoriteOff}
        alt="favorite"
      />
    </div>
  );
}
