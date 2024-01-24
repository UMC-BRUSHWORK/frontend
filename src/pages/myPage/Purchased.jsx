import React from 'react';
import styled from 'styled-components';
import PurchasedBar from '../../components/common/bar/PurchasedBar';
import Header from '../../components/common/header/Header';
import BottomNav from '../../components/common/bottomNav/BottomNav';
import PurchasedArtWorkInfo from '../../components/common/artwork/PurchasedArtWorkInfo';
import IMAGES from '../../assets';

const Wrapper = styled.div`
  height: calc(100vh - 11.2rem);

  justify-content: center;
  align-items: center;
`;
export default function Purchased() {
  const artworkData = {
    img: IMAGES.artWork6,
    name: '작품 이름',
    artist: '작가명',
    price: 100000,
  };

  return (
    <>
      <Header />
      <Wrapper>
        <PurchasedBar />
        <PurchasedArtWorkInfo
          img={artworkData.img}
          name={artworkData.name}
          artist={artworkData.artist}
          price={artworkData.price.toLocaleString()}
        />
      </Wrapper>
      <BottomNav />
    </>
  );
}
