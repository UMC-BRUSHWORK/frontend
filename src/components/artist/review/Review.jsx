import React from 'react';
import * as S from './Review.style';

export default function Review() {
  return (
    <S.Wrapper>
      <S.TextWrapper>
        <S.SmallText>닉네임</S.SmallText>
        <S.SmallText>|</S.SmallText>
        <S.SmallText>2023.12.07</S.SmallText>
      </S.TextWrapper>
      <S.NormalText>
        채팅 답장 조금만 빨리 해주셨으면 좋겠어요ㅜㅜ 작품은 예쁩니다. 채팅 답장
        조금만 빨리 해주셨으면 좋겠어요ㅜㅜ 작품은 예쁩니다. 채팅 답장 조금만
        빨리 해주셨으면 좋겠어요ㅜㅜ
      </S.NormalText>
    </S.Wrapper>
  );
}
