import React from 'react';
import * as S from './ReceiveBox.style';

export default function ReceiveBox({ message = 'asd' }) {
  return <S.Wrapper>{message}</S.Wrapper>;
}
