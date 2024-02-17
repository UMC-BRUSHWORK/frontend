import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Profile from '../../components/common/profile/Profile';
import LoginModal from '../../components/modal/LoginModal';
import { isLogin } from '../../utils/isLogin';

const Wrapper = styled.div``;

export default function ChattingList() {
  const navigate = useNavigate();

  return isLogin() ? (
    <Wrapper onClick={() => navigate('/chatting-list/chatting')}>
      <Profile />
    </Wrapper>
  ) : (
    <LoginModal />
  );
}
