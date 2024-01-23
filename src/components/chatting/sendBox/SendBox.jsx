import React from 'react';
import * as S from './SendBox.style';

export default function SendBox({ message = 'asd' }) {
  return <S.Wrapper>{message}</S.Wrapper>;
}
