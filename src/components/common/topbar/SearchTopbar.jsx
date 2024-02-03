import React from 'react';
import * as S from './Topbar.style';
import IMAGES from '../../../assets';

export default function SearchTopbar() {
  return (
    <S.Wrapper>
      <S.Left>
        <S.Icon src={IMAGES.arrowBack} />
      </S.Left>
      <S.SearchInput placeholder="검색어를 입력해주세요." />
      <S.Right>
        <S.Icon src={IMAGES.search} />
      </S.Right>
    </S.Wrapper>
  );
}
