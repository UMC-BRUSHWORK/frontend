import React from 'react';
import styled from 'styled-components';
import Header from '../components/common/header/Header';
import BottomNav from '../components/common/bottomNav/BottomNav';
import LogoutStatus from '../components/mypage/LogoutStatus';

const Wrapper = styled.div`
  height: calc(100vh - 11.2rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default function MyPage() {
  return (
    <>
      <Header />
      <Wrapper>
        <LogoutStatus />
      </Wrapper>
      <BottomNav />
    </>
  );
}
