import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/atom';
import Profile from '../../components/common/profile/Profile';
import LoginModal from '../../components/modal/LoginModal';

const Wrapper = styled.div``;

export default function ChattingList() {
  const [isLogin] = useRecoilState(loginState);
  const navigate = useNavigate();

  return isLogin ? (
    <Wrapper onClick={() => navigate('/chatting-list/chatting')}>
      <Profile />
    </Wrapper>
  ) : (
    <LoginModal />
  );
}
