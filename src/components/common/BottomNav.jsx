import React from 'react';
import {
  BsHouseDoor,
  BsHeart,
  BsPlusCircle,
  BsChatLeftText,
  BsPerson,
} from 'react-icons/bs';
import { Wrapper, MenuList, MenuWrapper, MenuTxt } from './BottomNav.style';

export default function BottomNav() {
  return (
    <Wrapper>
      <MenuList>
        <MenuWrapper>
          <BsHouseDoor size={28} />
          <MenuTxt>홈</MenuTxt>
        </MenuWrapper>
        <MenuWrapper>
          <BsHeart size={28} />
          <MenuTxt>관심</MenuTxt>
        </MenuWrapper>
        <MenuWrapper>
          <BsPlusCircle size={28} />
          <MenuTxt>작성</MenuTxt>
        </MenuWrapper>
        <MenuWrapper>
          <BsChatLeftText size={28} />
          <MenuTxt>채팅</MenuTxt>
        </MenuWrapper>
        <MenuWrapper>
          <BsPerson size={28} />
          <MenuTxt>My</MenuTxt>
        </MenuWrapper>
      </MenuList>
    </Wrapper>
  );
}
