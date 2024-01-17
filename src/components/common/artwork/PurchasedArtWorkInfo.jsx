import React from 'react';
import * as A from './PurchasedArtWorkInfo.style';
import ReviewWriteButton from '../button/ReviewWriteButton';

function PurchasedArtWorkInfo({ img, name, artist, price }) {
  return (
    <A.PurchasedArtInfoWrapper>
      <A.PurchasedArtworkImage src={img} alt={name} />
      <A.PurchasedArtWrapper>
        <A.PurchasedArtName>{name}</A.PurchasedArtName>
        <A.PurchasedArtistName>{artist}</A.PurchasedArtistName>
        <A.PurchasedArtPrice>{price.toLocaleString()}원</A.PurchasedArtPrice>
        <ReviewWriteButton />
      </A.PurchasedArtWrapper>
    </A.PurchasedArtInfoWrapper>
  );
}

export default PurchasedArtWorkInfo;
