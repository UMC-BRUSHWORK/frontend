import React from 'react';
import styled from 'styled-components';
import Header from '../../components/common/header/Header';
import BottomNav from '../../components/common/bottomNav/BottomNav';
import LogInStatus from '../../components/mypage/LoginStatus';

const Wrapper = styled.div`
  height: calc(100vh - 11.2rem);
  display: flex;
  align-items: center;
  margin-bottom: 6rem;
`;
export default function MyPage() {
  return (
    <>
      <Header />
      <Wrapper>
        <LogInStatus />
      </Wrapper>
      <BottomNav />
    </>
  );
}
