import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import Profile from '../../components/common/profile/Profile';
import * as S from './Artist.style';
import ArtWorksList from './ArtWorksList';
import ArtistReviewList from './ArtistReviewList';
import Topbar from '../../components/common/topbar/Topbar';
import { getUserInfo } from '../../apis/getUserInfo';

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

  let { authorId } = useParams();
  authorId = parseInt(authorId, 10);

  const [image, setImage] = useState();
  const [nickname, setNickname] = useState();
  const [introduce, setIntroduce] = useState();

  // 유저 정보 불러오기
  const getUser = async (userId) => {
    try {
      const { result } = await getUserInfo(userId);

      setImage(result.userProfile);
      setNickname(result.userNickname);
      setIntroduce(result.userIntroduce);
    } catch (error) {
      console.log(error);
    }
  };

  // 유저의 작품 불러오기

  useEffect(() => {
    getUser(authorId);
  }, []);

  return (
    <div>
      <Topbar />
      <Wrapper>
        <Profile image={image} nickname={nickname} introduce={introduce} />
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
        {selectedTab === 'artworks' && <ArtWorksList authorId={authorId} />}
        {selectedTab === 'reviews' && <ArtistReviewList />}
      </Wrapper>
    </div>
  );
}
