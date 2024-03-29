import React from 'react';
import {
  BsHouseDoor,
  BsHeart,
  BsPlusCircle,
  BsChatLeftText,
  BsPerson,
} from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import * as B from './BottomNav.style';

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <B.Wrapper>
      <B.MenuList>
        <B.MenuWrapper onClick={() => navigate('/')}>
          <BsHouseDoor size={28} />
          <B.MenuTxt>홈</B.MenuTxt>
        </B.MenuWrapper>
        <B.MenuWrapper onClick={() => navigate('/favorites')}>
          <BsHeart size={28} />
          <B.MenuTxt>관심</B.MenuTxt>
        </B.MenuWrapper>
        <B.MenuWrapper onClick={() => navigate('/artwork-upload')}>
          <BsPlusCircle size={28} />
          <B.MenuTxt>작성</B.MenuTxt>
        </B.MenuWrapper>
        <B.MenuWrapper onClick={() => navigate('/chatting-list')}>
          <BsChatLeftText size={28} />
          <B.MenuTxt>채팅</B.MenuTxt>
        </B.MenuWrapper>
        <B.MenuWrapper onClick={() => navigate('/my-page')}>
          <BsPerson size={28} />
          <B.MenuTxt>My</B.MenuTxt>
        </B.MenuWrapper>
      </B.MenuList>
    </B.Wrapper>
  );
}
