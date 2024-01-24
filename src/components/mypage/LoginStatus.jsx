import React from 'react';
import * as L from './LoginStatus.style';
import Profile from '../common/profile/Profile';
import SettingButton from '../common/button/SettingButton';
import MyArtWork from '../common/button/MyArtWork';
import PurchaseReviewList from '../common/myPage/PurchaseReviewList';
import Menu from '../common/menu/menu';
import myArtWorkDummy from '../../constants/myArtWorkDummy';
import MyArtWorkList from '../common/myPage/MyArtWorkList';

export default function LogInStatus() {
  return (
    <L.StyledContainer>
      <L.ProfileWrapper>
        <Profile />
        <SettingButton />
      </L.ProfileWrapper>
      <MyArtWork />
      <MyArtWorkList data={myArtWorkDummy} />
      <PurchaseReviewList />
      <Menu />
    </L.StyledContainer>
  );
}
