import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as L from './LogoutStatus.style';

export default function LogoutStatus() {
  const navigate = useNavigate();

  return (
    <L.Wrapper>
      <L.Logo />
      <L.Txt>지금 회원가입하고 멋진 작품을 거래해보아요</L.Txt>
      <L.Button onClick={() => navigate('/sign-in')}>
        로그인 / 회원가입
      </L.Button>
    </L.Wrapper>
  );
}
