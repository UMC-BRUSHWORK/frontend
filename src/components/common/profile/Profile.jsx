import React from 'react';
import * as S from './Profile.style';
import IMAGES from '../../../assets/index';

export default function Profile() {
  return (
    <S.Wrapper>
      <S.Profile src={IMAGES.profile} />
      <S.Detail>
        <S.Name>조소과 학생</S.Name>
        <S.Info>공방 창업을 준비하고 있는 조소과 학생입니다.</S.Info>
      </S.Detail>
    </S.Wrapper>
  );
}
