import React from 'react';
import * as S from './Temperature.style';
import IMAGES from '../../../assets';

export default function Temperature() {
  return (
    <S.Wrapper>
      <S.StatusWrapper>
        <S.Img src={IMAGES.dissatisfied} alt="dissatisfied" />
        <S.PercentWrapper>
          <S.Percent>75%</S.Percent>
          <S.Img src={IMAGES.arrowDropDown} alt="dropdown" />
          <S.StatusBar />
        </S.PercentWrapper>
        <S.Img src={IMAGES.satisfied} alt="satisfied" />
      </S.StatusWrapper>
    </S.Wrapper>
  );
}
