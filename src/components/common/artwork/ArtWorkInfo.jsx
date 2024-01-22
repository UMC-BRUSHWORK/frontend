import React from 'react';
import * as A from './ArtWorkInfo.style';

function ArtWorkInfo({ img, name, artist, price }) {
  return (
    <A.ArtInfoWrapper>
      <A.ArtworkImageContainer>
        <A.ArtworkImage src={img} alt={name} />
      </A.ArtworkImageContainer>
      <A.ArtName>{name}</A.ArtName>
      <A.ArtistName>{artist}</A.ArtistName>
      <A.ArtPrice>{price.toLocaleString()}원</A.ArtPrice>
    </A.ArtInfoWrapper>
  );
}

export default ArtWorkInfo;
