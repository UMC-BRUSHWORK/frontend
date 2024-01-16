import React from 'react';
import * as S from './Temperature.style';
import IMAGES from '../../../assets';

export default function Temperature() {
  const percent = '30%';
  return (
    <S.Wrapper>
      <S.StatusWrapper>
        <S.Img src={IMAGES.dissatisfied} alt="dissatisfied" />
        <S.PercentWrapper>
          <S.ArrowWrapper percent={percent}>
            <S.Percent>{percent}</S.Percent>
            <S.Arrow src={IMAGES.arrowDropDown} alt="dropdown" />
          </S.ArrowWrapper>
          <S.StatusBar />
          <S.Gage percent={percent} />
        </S.PercentWrapper>
        <S.Img src={IMAGES.satisfied} alt="satisfied" />
      </S.StatusWrapper>
    </S.Wrapper>
  );
}
