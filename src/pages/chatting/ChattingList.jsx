import React from 'react';
import styled from 'styled-components';
import Header from '../../components/common/header/Header';
import BottomNav from '../../components/common/bottomNav/BottomNav';
import LoginModal from '../../components/modal/LoginModal';
import ChatListComponent from '../../components/chatting/ChatList';
import { isLogin } from '../../utils/isLogin';

const Wrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 6rem;
`;

export default function ChattingList() {
  return isLogin() ? (
    <>
      <Header />
      <Wrapper>
        <ChatListComponent />
        <BottomNav />
      </Wrapper>
    </>
  ) : (
    <LoginModal />
  );
}
