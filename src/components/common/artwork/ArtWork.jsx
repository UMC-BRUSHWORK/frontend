import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ArtWork.style';
import IMAGES from '../../../assets';

export default function ArtWork({
  artSrc = 'artWork2',
  artName = '',
  artist = '',
  direction = 'row',
}) {
  const imgSrc = IMAGES[artSrc];

  const navigate = useNavigate();
  const handleMoveToArtWorkDetail = () => {
    navigate('/artworkDetail');
  };

  return (
    <S.Wrapper>
      <S.Image
        src={imgSrc}
        alt="artWork"
        width={direction === 'row' ? 'auto' : '100%'}
        height={direction === 'row' ? '9rem' : 'auto'}
        onClick={handleMoveToArtWorkDetail}
      />
      <S.ArtName>{artName}</S.ArtName>
      <S.Artist>{artist}</S.Artist>
    </S.Wrapper>
  );
}
