import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/common/header/Header';
import BottomNav from '../../components/common/bottomNav/BottomNav';
import * as S from './Favorites.style';
import ColumnArtworkList from '../../components/common/artworkList/ColumnArtworkList';
import { getFavorite } from '../../apis/getFavorite';
import userDummy from '../../constants/userDummy';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.8rem 2rem;
  margin-bottom: 6rem;
`;

export default function Favorites() {
  const [favoriteList, setFavoriteList] = useState([]);

  const getFavoriteList = async ({ userId, token }) => {
    try {
      const res = await getFavorite({ userId, token });
      setFavoriteList(res.result.userLikeList);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // userDummy
    const { userId, token } = userDummy;

    getFavoriteList({ userId, token });
  }, []);

  return (
    <div>
      <Header />
      <Wrapper>
        <S.Text>찜한 작품</S.Text>
        <ColumnArtworkList data={favoriteList} />
      </Wrapper>
      <BottomNav />
    </div>
  );
}
