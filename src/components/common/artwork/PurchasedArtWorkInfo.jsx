import React from 'react';
import * as A from './PurchasedArtWorkInfo.style';
import ReviewWriteButton from '../button/ReviewWriteButton';

function PurchasedArtWorkInfo({
  img,
  name,
  artist,
  price,
  reviewStatus,
  productId,
}) {
  return (
    <A.PurchasedArtInfoWrapper>
      <A.PurchasedArtworkImage src={img} alt={name} />
      <A.PurchasedArtWrapper>
        <A.PurchasedArtName>{name}</A.PurchasedArtName>
        <A.PurchasedArtistName>{artist}</A.PurchasedArtistName>
        <A.PurchasedArtPrice>{price}원</A.PurchasedArtPrice>
        <ReviewWriteButton reviewStatus={reviewStatus} productId={productId} />
      </A.PurchasedArtWrapper>
    </A.PurchasedArtInfoWrapper>
  );
}

function PurchasedList({ props }) {
  console.log(props);
  return (
    <div>
      {props &&
        props.map((item) => (
          <PurchasedArtWorkInfo
            key={item.salesId}
            img={item.productImg}
            name={item.productName}
            artist={item.authorNickname}
            price={item.productPrice}
            reviewStatus={item.reviewStatus}
            productId={item.productId}
          />
        ))}
    </div>
  );
}

export default PurchasedList;
