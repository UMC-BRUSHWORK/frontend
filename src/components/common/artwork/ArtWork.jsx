import React from 'react';
import * as S from './ArtWork.style';
import IMAGES from '../../../assets';

export default function ArtWork({
  artSrc = 'artWork2',
  artName = '작품 이름',
  artist = '작가명',
}) {
  const imgSrc = IMAGES[artSrc];

  return (
    <S.Wrapper>
      <S.Image src={imgSrc} alt="artWork" />
      <S.ArtName>{artName}</S.ArtName>
      <S.Artist>{artist}</S.Artist>
    </S.Wrapper>
  );
}
