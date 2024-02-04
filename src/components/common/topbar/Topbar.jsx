import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as T from './Topbar.style';
import IMAGES from '../../../assets';

function Topbar() {
  const navigate = useNavigate();

  return (
    <T.Wrapper>
      <T.Left>
        <T.Icon src={IMAGES.arrowBack} onClick={() => navigate('/')} />
      </T.Left>
      <T.Right>
        <T.IconWrapper>
          <T.Icon src={IMAGES.search} onClick={() => navigate('/search')} />
          <T.Icon src={IMAGES.notif} />
        </T.IconWrapper>
      </T.Right>
    </T.Wrapper>
  );
}

export default Topbar;
