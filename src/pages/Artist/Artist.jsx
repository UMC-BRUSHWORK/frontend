/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../Components/Common/Header/Header';
import Profile from '../../Components/Common/Profile/Profile';
import ArtWorksList from './ArtWorksList';
import ReviewList from './ReviewList';
import * as S from './Artist.style';

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1.6rem 2rem;
`;

function ArtistPage({ artistId }) {
  const [selectedTab, setSelectedTab] = useState('artworks');

  return (
    <div>
      <Header />
      <Wrapper>
        <Profile />
        <S.ButtonWrapper>
          <S.Button
            selected={selectedTab === 'artworks'}
            onClick={() => setSelectedTab('artworks')}
          >
            작품
          </S.Button>
          <S.Button
            selected={selectedTab === 'reviews'}
            onClick={() => setSelectedTab('reviews')}
          >
            후기
          </S.Button>
        </S.ButtonWrapper>
        {selectedTab === 'artworks' && <ArtWorksList artistId={artistId} />}
        {selectedTab === 'reviews' && <ReviewList artistId={artistId} />}
      </Wrapper>
    </div>
  );
}

export default ArtistPage;
