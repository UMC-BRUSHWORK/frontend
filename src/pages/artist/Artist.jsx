import React, { useState } from 'react';
import styled from 'styled-components';
// import Header from '../../components/common/header/Header';
import Profile from '../../components/common/profile/Profile';
import * as S from './Artist.style';
import ArtWorksList from './ArtWorksList';
import ArtistReviewList from './ArtistReviewList';
import Topbar from '../../components/common/topbar/Topbar';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.8rem 2rem;
  margin-bottom: 6rem;
`;

export default function ArtistPage() {
  const [selectedTab, setSelectedTab] = useState('artworks');

  const handleClickArtworks = () => {
    setSelectedTab('artworks');
  };

  const handleClickReviews = () => {
    setSelectedTab('reviews');
  };

  return (
    <div>
      <Topbar />
      <Wrapper>
        <Profile />
        <S.ButtonWrapper>
          <S.Button
            selected={selectedTab === 'artworks'}
            onClick={() => handleClickArtworks()}
          >
            판매 작품
          </S.Button>
          <S.Button
            selected={selectedTab === 'reviews'}
            onClick={() => handleClickReviews()}
          >
            후기
          </S.Button>
        </S.ButtonWrapper>
        {selectedTab === 'artworks' && <ArtWorksList />}
        {selectedTab === 'reviews' && <ArtistReviewList />}
      </Wrapper>
    </div>
  );
}
