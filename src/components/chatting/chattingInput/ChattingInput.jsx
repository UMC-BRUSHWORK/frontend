import React from 'react';
import * as S from './ChattingInput.style';
import IMAGES from '../../../assets';

export default function ChattingInput() {
  return (
    <S.Wrapper>
      <S.Input placeholder="메시지를 입력하세요" />
      <S.Send src={IMAGES.send} alt="send" />
      <S.Add src={IMAGES.add} alt="add" />
    </S.Wrapper>
  );
}
