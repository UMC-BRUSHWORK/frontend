import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
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
  const [productList, setProductList] = useState([]);
  const [ref, inView] = useInView();
  const [cursor, setCursor] = useState(null);
  const [loading, setLoading] = useState(false);

  const getProducts = async ({ cursorId, paging }) => {
    try {
      const res = await getProductList({ cursorId, paging });
      setProductList((prevData) => [...prevData, ...res.result.categoryData]);
      setCursor(res.result.cursorId);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const cursorId = cursor;
    const paging = 10;

    if (loading !== true && inView) {
      setLoading(true);
      getProducts({ cursorId, paging });
    }
  }, [inView]);

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
        <div ref={ref} style={{ width: '1px' }} />
      </Wrapper>
      <BottomNav />
    </>
  );
}
