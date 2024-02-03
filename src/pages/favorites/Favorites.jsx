import React from 'react';
import styled from 'styled-components';
import Header from '../../components/common/header/Header';
import BottomNav from '../../components/common/bottomNav/BottomNav';
import * as S from './Favorites.style';
import ColumnArtworkList from '../../components/common/artworkList/ColumnArtworkList';
import artWorkDummy from '../../constants/artWorkDummy';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.8rem 2rem;
  margin-bottom: 6rem;
`;

export default function Favorites() {
  return (
    <div>
      <Header />
      <Wrapper>
        <S.Text>찜한 작품</S.Text>
        <ColumnArtworkList data={artWorkDummy} />
      </Wrapper>
      <BottomNav />
    </div>
  );
}
