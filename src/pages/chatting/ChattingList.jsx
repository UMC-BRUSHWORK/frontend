import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Profile from '../../components/common/profile/Profile';

const Wrapper = styled.div``;

export default function ChattingList() {
  const navigate = useNavigate();

  return (
    <Wrapper onClick={() => navigate('/chatting-list/chatting')}>
      <Profile />
    </Wrapper>
  );
}
