import React from 'react';
import * as S from './Topbar.style';
import IMAGES from '../../../assets';
import BackButton from '../backButton/BackButton';

export default function SearchTopbar() {
  return (
    <S.Wrapper>
      <BackButton />
      <S.SearchInput placeholder="검색어를 입력해주세요." />
      <S.Right>
        <S.Icon src={IMAGES.search} />
      </S.Right>
    </S.Wrapper>
  );
}
