import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledLogo } from './Logo.style';
import IMAGES from '../../assets';

export default function Logo() {
  const navigate = useNavigate();
  return (
    <StyledLogo
      src={IMAGES.brushworkLogo}
      alt="Logo"
      onClick={() => navigate('/')}
    />
  );
}
