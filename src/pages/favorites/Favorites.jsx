import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/atom';
import Header from '../../components/common/header/Header';
import BottomNav from '../../components/common/bottomNav/BottomNav';
import * as S from './Favorites.style';
import ColumnArtworkList from '../../components/common/artworkList/ColumnArtworkList';
import { getProductList } from '../../apis/getProductList';
import LoginModal from '../../components/modal/LoginModal';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.8rem 2rem;
  margin-bottom: 6rem;
`;

export default function Favorites() {
  const [isLogin] = useRecoilState(loginState);
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

  return isLogin ? (
    <>
      <Header />
      <Wrapper>
        <S.Text>찜한 작품</S.Text>
        <ColumnArtworkList data={productList} />
      </Wrapper>
      <BottomNav />
    </>
  ) : (
    <LoginModal />
  );
}
