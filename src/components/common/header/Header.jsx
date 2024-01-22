import React from 'react';
import { GoSearch, GoBell } from 'react-icons/go';
import * as H from './Header.style';
import Logo from '../../logo/Logo';

export default function Header() {
  return (
    <H.Wrapper>
      <H.MenuWrapper>
        <Logo />
        <H.IconWrapper>
          <H.Icon>
            <GoSearch size={24} />
          </H.Icon>
          <H.Icon>
            <GoBell size={24} />
          </H.Icon>
        </H.IconWrapper>
      </H.MenuWrapper>
    </H.Wrapper>
  );
}
