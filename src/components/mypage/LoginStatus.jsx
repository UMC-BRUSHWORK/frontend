import React, { useEffect, useState } from 'react';
import * as L from './LoginStatus.style';
import Profile from '../common/profile/Profile';
import SettingButton from '../common/button/SettingButton';
import MyArtWork from '../common/button/MyArtWork';
import PurchaseReviewList from '../common/myPage/PurchaseReviewList';
import Menu from '../common/menu/menu';
import MyArtWorkList from '../common/myPage/MyArtWorkList';
import { getProductList } from '../../apis/getProductList';

export default function LogInStatus() {
  const [productList, setProductList] = useState([{}]);
  const getProducts = async ({ cursorId, paging }) => {
    try {
      const res = await getProductList({ cursorId, paging });
      setProductList(res.result.categoryData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const cursorId = null;
    const paging = 6;
    getProducts({ cursorId, paging });
  }, []);

  return (
    <L.StyledContainer>
      <L.ProfileWrapper>
        <Profile />
        <SettingButton />
      </L.ProfileWrapper>
      <MyArtWork />
      <MyArtWorkList data={productList} />
      <PurchaseReviewList />
      <Menu />
    </L.StyledContainer>
  );
}
