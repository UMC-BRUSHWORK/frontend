import React, { useEffect, useState } from 'react';
import * as L from './LoginStatus.style';
import Profile from '../common/profile/Profile';
import SettingButton from '../common/button/SettingButton';
import PurchaseReviewList from '../common/myPage/PurchaseReviewList';
import Menu from '../common/menu/menu';
import { getProductList } from '../../apis/getProductList';
import PageLinkButton from '../common/button/PageLinkButton';
import RowArtWorkList from '../common/artworkList/RowArtWorkList';

export default function LogInStatus() {
  const [productList, setProductList] = useState([{}]);
  const [userData, setUserData] = useState({
    // profile: null,
    // nickname: '',
    // introduce: null,
  });

  const getProducts = async ({ cursorId, paging, author }) => {
    try {
      const res = await getProductList({ cursorId, paging, author });
      setProductList(res.result.categoryData);
    } catch (error) {
      console.log(error);
    }
  };

  const userId = localStorage.getItem('userId');
  const nickname = localStorage.getItem('nickname');
  const profile = localStorage.getItem('profile');
  const introduce = localStorage.getItem('introduce');

  useEffect(() => {
    const cursorId = null;
    const paging = 6;
    const author = parseInt(localStorage.getItem('userId'), 10);
    getProducts({ cursorId, paging, author });

    console.log(profile);
    // setUserData((prevData) => ({
    //   ...prevData,
    //   nickname,
    //   profile,
    //   introduce,
    // }));
    setUserData({
      nickname,
      profile,
      introduce,
    });
    console.log(userData);
  }, []);

  return (
    <L.StyledContainer>
      <L.ProfileWrapper>
        <Profile
          image={profile || null}
          nickname={userData.nickname}
          introduce={userData.introduce}
        />
        <SettingButton userData={userData} />
      </L.ProfileWrapper>
      <L.Margin />
      <PageLinkButton page="내 작품" userId={userId} />
      {productList ? (
        <RowArtWorkList data={productList} />
      ) : (
        <L.Text>아직 작품이 없습니다.</L.Text>
      )}
      <L.Margin />
      <PageLinkButton page="거래 후기" userId={userId} />
      <PurchaseReviewList />
      <Menu />
    </L.StyledContainer>
  );
}
