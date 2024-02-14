import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/common/header/Header';
import BottomNav from '../../components/common/bottomNav/BottomNav';
import * as S from './Main.style';
import RowArtWorkList from '../../components/common/artworkList/RowArtWorkList';
import ColumnArtworkList from '../../components/common/artworkList/ColumnArtworkList';
import { getProductList } from '../../apis/getProductList';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.8rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 6rem;
`;

export default function Main() {
  const [productList, setProductList] = useState([{}]);
  const getProducts = async ({ cursorId, paging }) => {
    try {
      const res = await getProductList({ cursorId, paging });
      setProductList(res.result.categoryData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const cursorId = null;
    const paging = 18;

    getProducts({ cursorId, paging });
  }, []);

  return (
    <>
      <Header />
      <Wrapper>
        <S.ListWrapper>
          <S.Text>매력적인 조각 작품</S.Text>
          <RowArtWorkList data={productList} />
        </S.ListWrapper>
        <S.ListWrapper>
          <S.Text>매력적인 조각 작품</S.Text>
          <RowArtWorkList data={productList} />
        </S.ListWrapper>
        <S.Line />
        <S.Text>새로운 작품</S.Text>
        <ColumnArtworkList data={productList} />
      </Wrapper>
      <BottomNav />
    </>
  );
}
