import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PurchasedArtWorkInfo from '../../components/common/artwork/PurchasedArtWorkInfo';
import IMAGES from '../../assets';
import { getPurchasedList } from '../../apis/getPurchasedList';
import font from '../../styles/font';
import color from '../../styles/color';

const EmptyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 1.7rem;
  ${font.medium_13};
`;

const Button = styled.div`
  width: 14.5rem;
  color: ${color.white};
  ${font.medium_15}
  padding: 10px 28px;
  margin-top: 15px;
  cursor: pointer;
  border-radius: 15px;
  background-color: ${color.primary_dark};
`;

export default function Purchased() {
  const [purchasedList, setPurchasedList] = useState();
  const artworkData = {
    img: IMAGES.artWork6,
    name: '작품 이름',
    artist: '작가명',
    price: 100000,
  };

  const getPurchased = async (props) => {
    const { result } = await getPurchasedList(props);
    setPurchasedList(result.historyList);
    console.log(result.historyList);
  };

  useEffect(() => {
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');
    const type = 1;
    const props = { token, userId, type };
    getPurchased(props);
  }, []);

  return (
    <div>
      {purchasedList && purchasedList.length === 0 ? (
        <EmptyWrapper>
          <p>아직 구매 작품이 없습니다</p>
          <p>작품 둘러보러 가기</p>
          <Link to="/">
            <Button>작품 보러가기</Button>
          </Link>
        </EmptyWrapper>
      ) : (
        <PurchasedArtWorkInfo
          img={artworkData.img}
          name={artworkData.name}
          artist={artworkData.artist}
          price={artworkData.price.toLocaleString()}
        />
      )}
    </div>
  );
}
