import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import * as A from './ArtworkDetail.style';
import IMAGES from '../../../assets';
import Profile from '../../../components/common/profile/Profile';
import RowArtworkList from '../../../components/common/artworkList/RowArtWorkList';
import ReviewList from '../../../components/artist/reviewList/ReviewList';
import reviewDummy from '../../../constants/reviewsDummy';
import { getProductList } from '../../../apis/getProductList';

const Wrapper = styled.div`
  margin-bottom: 6rem;
`;

function MyArtworkDetail() {
  const [productList, setProductList] = useState([{}]);
  const getProducts = async ({ cursorId, paging }) => {
    try {
      const res = await getProductList({ cursorId, paging });
      setProductList(res.result.categoryData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const cursorId = null;
    const paging = 6;
    getProducts({ cursorId, paging });
  }, []);

  return (
    <Wrapper>
      <A.Image src={IMAGES.artWork2} />
      <A.Wrapper>
        <A.TitleWrapper>
          <A.Title>작품 제목</A.Title>
          <A.Report src={IMAGES.edit} />
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
        <A.Margin>
          <Profile />
        </A.Margin>
        <A.Margin>
          <RowArtworkList data={productList} />
        </A.Margin>
        <ReviewList data={reviewDummy} />
      </A.Wrapper>
      <A.BottomWrapper>
        <A.CompleteBtn>판매완료</A.CompleteBtn>
      </A.BottomWrapper>
    </Wrapper>
  );
}

export default MyArtworkDetail;
