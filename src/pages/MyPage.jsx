import React from 'react';
import MyArtWork from '../components/common/button/MyArtWork';
import RowArtWorkList from '../components/common/artworkList/RowArtWorkList';
import myArtWorkDummy from '../constants/myArtWorkDummy';

export default function MyPage() {
  return (
    <>
      <MyArtWork />
      <RowArtWorkList data={myArtWorkDummy} />
    </>
  );
}
