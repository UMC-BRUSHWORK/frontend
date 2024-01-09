import React from 'react';
import {
  BsHouseDoor,
  BsHeart,
  BsPlusCircle,
  BsChatLeftText,
  BsPerson,
} from 'react-icons/bs';
import * as B from './BottomNav.style';

export default function BottomNav() {
  return (
    <B.Wrapper>
      <B.MenuList>
        <B.MenuWrapper>
          <BsHouseDoor size={28} />
          <B.MenuTxt>홈</B.MenuTxt>
        </B.MenuWrapper>
        <B.MenuWrapper>
          <BsHeart size={28} />
          <B.MenuTxt>관심</B.MenuTxt>
        </B.MenuWrapper>
        <B.MenuWrapper>
          <BsPlusCircle size={28} />
          <B.MenuTxt>작성</B.MenuTxt>
        </B.MenuWrapper>
        <B.MenuWrapper>
          <BsChatLeftText size={28} />
          <B.MenuTxt>채팅</B.MenuTxt>
        </B.MenuWrapper>
        <B.MenuWrapper>
          <BsPerson size={28} />
          <B.MenuTxt>My</B.MenuTxt>
        </B.MenuWrapper>
      </B.MenuList>
    </B.Wrapper>
  );
}
