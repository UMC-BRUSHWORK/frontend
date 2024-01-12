import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogoImage from '../../assets/images/brushwork_logo.svg';
import { StyledLogo } from './Logo.style';

export default function Logo() {
  const navigate = useNavigate();
  return (
    <StyledLogo src={LogoImage} alt="Logo" onClick={() => navigate('/')} />
  );
}
