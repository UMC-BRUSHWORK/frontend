import React from 'react';
import * as L from './LoginModal.style';

export default function LoginModal() {
  return (
    <L.Wrapper>
      <L.MainTxt>해당 기능은 로그인 후 사용하실 수 있습니다.</L.MainTxt>
      <L.SubTxt>지금 회원가입하고 멋진 작품을 거래해보아요</L.SubTxt>
      <L.ButtonWrapper>
        <L.Button>취소</L.Button>
        <L.Button login>로그인/회원가입 하러가기</L.Button>
      </L.ButtonWrapper>
    </L.Wrapper>
  );
}
