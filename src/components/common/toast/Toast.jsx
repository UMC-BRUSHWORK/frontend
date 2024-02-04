import React from 'react';
import * as S from './Tost.style';
import IMAGES from '../../../assets';

export default function Toast({ toastVisible, message }) {
  return (
    <S.Wrapper visible={toastVisible}>
      <S.Warning src={IMAGES.warning} alt="warning" />
      <S.Msg>{message}</S.Msg>
    </S.Wrapper>
  );
}
