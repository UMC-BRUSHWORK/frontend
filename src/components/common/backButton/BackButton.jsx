import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import IMAGES from '../../../assets';

export const Button = styled.div`
  border: none;
`;

export const BackImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export default function BackButton() {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <Button type="button" onClick={onClickBack}>
      <BackImg src={IMAGES.arrowBack} alt="backButton" />
    </Button>
  );
}
