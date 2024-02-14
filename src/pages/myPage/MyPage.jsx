import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/atom';
import Header from '../../components/common/header/Header';
import BottomNav from '../../components/common/bottomNav/BottomNav';
import LogInStatus from '../../components/mypage/LoginStatus';
import LogoutStatus from '../../components/mypage/LogoutStatus';

const Wrapper = styled.div`
  height: calc(100vh - 11.2rem);
  display: flex;
  align-items: center;
  margin-bottom: 6rem;
`;
export default function MyPage() {
  const [isLogin] = useRecoilState(loginState);

  return (
    <>
      <Header />
      <Wrapper>{isLogin ? <LogInStatus /> : <LogoutStatus />}</Wrapper>
      <BottomNav />
    </>
  );
}
