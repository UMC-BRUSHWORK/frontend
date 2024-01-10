/* eslint-disable react/prop-types */
import React from 'react';
import * as S from './ArtWork.style';
import IMAGES from '../../../assets';

export default function ArtWork({ artName = '작품 이름', artist = '작가명' }) {
  return (
    <S.Wrapper>
      <S.Image src={IMAGES.artWork} alt="artWork" />
      <S.ArtName>{artName}</S.ArtName>
      <S.Artist>{artist}</S.Artist>
    </S.Wrapper>
  );
}
