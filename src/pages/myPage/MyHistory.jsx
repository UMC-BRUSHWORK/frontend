import React, { useState } from 'react';
import styled from 'styled-components';
import PurchasedTopbar from '../../components/common/topbar/PurchasedTopbar';
import * as S from './MyHistory.style';
import Purchased from './Purchased';
import MyReview from './MyReview';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.8rem 2rem;
  margin-bottom: 6rem;
`;

export default function MyHistory() {
  const [selectedTab, setSelectedTab] = useState('purchased');

  const handleClickPurchased = () => {
    setSelectedTab('purchased');
  };

  const handleClickReviews = () => {
    setSelectedTab('reviews');
  };

  return (
    <div>
      <PurchasedTopbar />
      <Wrapper>
        <S.ButtonWrapper>
          <S.Button
            selected={selectedTab === 'purchased'}
            onClick={() => handleClickPurchased()}
          >
            구매 내역
          </S.Button>
          <S.Button
            selected={selectedTab === 'reviews'}
            onClick={() => handleClickReviews()}
          >
            내가 쓴 후기
          </S.Button>
        </S.ButtonWrapper>
        {selectedTab === 'purchased' && <Purchased />}
        {selectedTab === 'reviews' && <MyReview />}
      </Wrapper>
    </div>
  );
}
