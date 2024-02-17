import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import * as L from './LoginStatus.style';
import Profile from '../common/profile/Profile';
import SettingButton from '../common/button/SettingButton';
import MyArtWork from '../common/button/MyArtWork';
import PurchaseReviewList from '../common/myPage/PurchaseReviewList';
import Menu from '../common/menu/menu';
import MyArtWorkList from '../common/myPage/MyArtWorkList';
import { getProductList } from '../../apis/getProductList';
import { userState } from '../../recoil/atom';

export default function LogInStatus() {
  const [productList, setProductList] = useState([{}]);
  const [userData] = useRecoilState(userState);

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
        <Profile
          image={userData.image ? userData.image : null}
          nickname={userData.nickname}
          introduce={userData.introduce ? userData.introduce : null}
        />
        <SettingButton />
      </L.ProfileWrapper>
      <MyArtWork />
      <MyArtWorkList data={productList} />
      <PurchaseReviewList />
      <Menu />
    </L.StyledContainer>
  );
}
