import React from 'react';
import styled from 'styled-components';
import * as S from './Search.style';
import RowArtWorkList from '../../components/common/artworkList/RowArtWorkList';
import artWorkDummy from '../../constants/artWorkDummy';
import Category from '../../components/common/category/Category';
import SearchTopbar from '../../components/common/topbar/SearchTopbar';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.8rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  margin-bottom: 6rem;
`;

export default function Seach() {
  return (
    <Wrapper>
      <SearchTopbar />
      <S.Line />
      <S.Text>마음에 드는 작품을 찾아보세요!</S.Text>
      <Category />
      <S.Line />
      <S.ListWrapper>
        <S.Text>추천 작품</S.Text>
        <RowArtWorkList data={artWorkDummy} size="9rem" />
      </S.ListWrapper>
      <S.ListWrapper>
        <S.Text>요즘 인기 작품</S.Text>
        <RowArtWorkList data={artWorkDummy} size="9rem" />
      </S.ListWrapper>
      <S.ListWrapper>
        <S.Text>따끈따끈 신인 작품</S.Text>
        <RowArtWorkList data={artWorkDummy} size="9rem" />
      </S.ListWrapper>
    </Wrapper>
  );
}
