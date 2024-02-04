import React from 'react';
import * as T from './Topbar.style';
import BackButton from '../backButton/BackButton';

function PurchasedTopbar() {
  return (
    <T.PurchasedWrapper>
      <T.Left>
        <BackButton />
        <T.LogoText>구매 내역</T.LogoText>
      </T.Left>
    </T.PurchasedWrapper>
  );
}

export default PurchasedTopbar;
