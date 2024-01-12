import React from 'react';
import * as L from './Logout.style';

export default function Logout() {
  return (
    <L.Wrapper>
      <L.Txt>정말로 로그아웃 하시겠습니까?</L.Txt>
      <L.ButtonWrapper>
        <L.Button>취소</L.Button>
        <L.Button logout>로그아웃</L.Button>
      </L.ButtonWrapper>
    </L.Wrapper>
  );
}
