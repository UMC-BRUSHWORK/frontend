import React from 'react';
import { GoSearch, GoBell } from 'react-icons/go';
import { Wrapper, MenuWrapper, Logo, IconWrapper, Icon } from './Header.style';

export default function Header() {
  return (
    <Wrapper>
      <MenuWrapper>
        <Logo />
        <IconWrapper>
          <Icon>
            <GoSearch size={24} />
          </Icon>
          <Icon>
            <GoBell size={24} />
          </Icon>
        </IconWrapper>
      </MenuWrapper>
    </Wrapper>
  );
}
