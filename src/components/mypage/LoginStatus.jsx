import React, { useEffect, useState } from 'react';
import * as L from './LoginStatus.style';
import Profile from '../common/profile/Profile';
import SettingButton from '../common/button/SettingButton';
import PurchaseReviewList from '../common/myPage/PurchaseReviewList';
import Menu from '../common/menu/menu';
import MyArtWorkList from '../common/myPage/MyArtWorkList';
import { getProductList } from '../../apis/getProductList';
import PageLinkButton from '../common/button/PageLinkButton';

export default function LogInStatus() {
  const [productList, setProductList] = useState([{}]);
  const [userData, setUserData] = useState({
    profile: null,
    nickname: '',
    introduce: null,
  });

  const getProducts = async ({ cursorId, paging }) => {
    try {
      const res = await getProductList({ cursorId, paging });
      setProductList(res.result.categoryData);
    } catch (error) {
      console.log(error);
    }
  };

  const userId = localStorage.getItem('userId');

  useEffect(() => {
    const cursorId = null;
    const paging = 6;
    getProducts({ cursorId, paging });

    const nickname = localStorage.getItem('nickname');
    const profile = localStorage.getItem('profile');
    const introduce = localStorage.getItem('introduce');
    setUserData((prevData) => ({
      ...prevData,
      nickname,
      profile,
      introduce,
    }));
  }, []);

  return (
    <L.StyledContainer>
      <L.ProfileWrapper>
        <Profile
          image={userData.image ? userData.image : null}
          nickname={userData.nickname}
          introduce={userData.introduce}
        />
        <SettingButton userData={userData} />
      </L.ProfileWrapper>
      <L.Margin />
      <PageLinkButton page="내 작품" userId={userId} />
      <MyArtWorkList data={productList} />
      <L.Margin />
      <PageLinkButton page="거래 후기" userId={userId} />
      <PurchaseReviewList />
      <Menu />
    </L.StyledContainer>
  );
}
