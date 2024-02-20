/* eslint-disable react/destructuring-assignment */
import React from 'react';
import * as P from './ProductBar.style';

export default function ProductBar({ info }) {
  return (
    <P.Wrapper>
      <P.ProductWrapper>
        <P.ProductImg src={info.productImg} />
        <P.ProductInfo>
          <P.Name>{info.productName}</P.Name>
          <P.Price>{info.productName}</P.Price>
        </P.ProductInfo>
      </P.ProductWrapper>
      <P.Status status={info.productStatus}>
        {info.productStatus ? '판매완료' : '판매중'}
      </P.Status>
    </P.Wrapper>
  );
}
