import React from 'react';
import styled from 'styled-components';
import * as A from './ArtworkDetail.style';
import IMAGES from '../../../assets';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

function ArtworkDetail() {
  return (
    <Wrapper>
      <A.Image src={IMAGES.artWork2} />
      <A.Wrapper>
        <A.TitleWrapper>
          <A.Title>작품 제목</A.Title>
          <A.Report src={IMAGES.emergency} />
        </A.TitleWrapper>
        <A.Artist>작가명</A.Artist>
        <A.Description>
          한국대 졸업작품으로 만들었습니다. ‘화합’이라는 주제로 남녀, 또는 두
          개의 자아가 끌어안고 있는 모습을 한국적인 컨셉으로 표현했습니다.
          스테인리스 재질이라 가볍고 잘 녹슬지 않아요. 한 달 전에 만든 작품이라
          상태 좋습니다! 편하게 연락주세요:)
        </A.Description>
        <A.Category>한국화</A.Category>
        <A.SubWrapper>
          <A.Price>110,000원</A.Price>
          <A.Delivery>택배</A.Delivery>
        </A.SubWrapper>
        <A.Divider />
        <A.BottomWrapper>
          <A.FavoriteBtn src={IMAGES.favoriteOff} />
          <A.AskBtn>문의하기</A.AskBtn>
        </A.BottomWrapper>
      </A.Wrapper>
    </Wrapper>
  );
}

export default ArtworkDetail;
