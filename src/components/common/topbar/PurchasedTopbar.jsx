import React from 'react';
import * as T from './Topbar.style';
import IMAGES from '../../../assets';

function PurchasedTopbar() {
  return (
    <T.Wrapper>
      <T.Left>
        <T.Icon src={IMAGES.arrowBack} />
        <T.LogoText>구매 내역</T.LogoText>
      </T.Left>
    </T.Wrapper>
  );
}

export default PurchasedTopbar;
