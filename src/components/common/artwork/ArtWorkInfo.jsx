import React from 'react';
import * as A from './ArtWorkInfo.style';
import ReviewWriteButton from '../button/ReviewWriteButton';

function ArtWorkInfo({ img, name, artist, price }) {
  return (
    <A.ArtInfoWrapper>
      <A.ArtworkImage src={img} alt={name} />
      <A.ArtWrapper>
        <A.ArtName>{name}</A.ArtName>
        <A.ArtistName>{artist}</A.ArtistName>
        <A.ArtPrice>{price.toLocaleString()}원</A.ArtPrice>
        <ReviewWriteButton />
      </A.ArtWrapper>
    </A.ArtInfoWrapper>
  );
}

export default ArtWorkInfo;
