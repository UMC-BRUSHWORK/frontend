import React from 'react';
import * as L from './LogoutStatus.style';

export default function LogoutStatus() {
  return (
    <L.Wrapper>
      <L.Logo />
      <L.Txt>지금 회원가입하고 멋진 작품을 거래해보아요</L.Txt>
      <L.Button>로그인 / 회원가입</L.Button>
    </L.Wrapper>
  );
}
