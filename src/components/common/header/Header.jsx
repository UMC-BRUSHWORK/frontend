import React from 'react';
import { GoSearch, GoBell } from 'react-icons/go';
import { useNavigate } from 'react-router-dom';
import * as H from './Header.style';
import Logo from '../../logo/Logo';

export default function Header() {
  const navigate = useNavigate();
  return (
    <H.Wrapper>
      <H.MenuWrapper>
        <Logo />
        <H.IconWrapper>
          <H.Icon>
            <GoSearch size={24} onClick={() => navigate('/search')} />
          </H.Icon>
          <H.Icon>
            <GoBell size={24} />
          </H.Icon>
        </H.IconWrapper>
      </H.MenuWrapper>
    </H.Wrapper>
  );
}
