import React from 'react';
import * as S from './Review.style';

export default function Review({ nickname, date, review }) {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.SmallText>{nickname}</S.SmallText>
        <S.SmallText>|</S.SmallText>
        <S.SmallText>{date}</S.SmallText>
      </S.TextWrapper>
      <S.NormalText>{review}</S.NormalText>
    </S.Wrapper>
  );
}
