import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useInView } from 'react-intersection-observer';
import Header from '../../components/common/header/Header';
import BottomNav from '../../components/common/bottomNav/BottomNav';
import * as S from './Favorites.style';
import LoginModal from '../../components/modal/LoginModal';
import { isLogin } from '../../utils/isLogin';
import { getFavorite } from '../../apis/getFavorite';
import FavorArtworkList from '../../components/common/artworkList/FavorList';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.8rem 2rem;
  margin-bottom: 6rem;
`;

export default function Favorites() {
  const [productList, setProductList] = useState([{}]);
  const [ref, inView] = useInView();
  const [cursor, setCursor] = useState(null);
  const [loading, setLoading] = useState(false);

  const getFavoriteList = async (userId, cursorId, paging) => {
    const { result } = await getFavorite({ userId, cursorId, paging });
    setProductList((prevData) => [...prevData, ...result.userLikeList]);
    setCursor(result.cursorId);
    setLoading(false);
  };

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    const cursorId = cursor;
    const paging = 10;

    if (loading !== true && inView) {
      setLoading(true);
      getFavoriteList(userId, cursorId, paging);
    }
  }, [inView]);

  return isLogin() ? (
    <>
      <Header />
      <Wrapper>
        <S.Text>찜한 작품</S.Text>
        {productList.length === 0 ? (
          '아직 찜한 작품이 존재하지 않습니다!'
        ) : (
          <>
            <FavorArtworkList data={productList} />
            <div ref={ref} style={{ width: '1px' }} />
          </>
        )}
      </Wrapper>
      <BottomNav />
    </>
  ) : (
    <LoginModal />
  );
}
