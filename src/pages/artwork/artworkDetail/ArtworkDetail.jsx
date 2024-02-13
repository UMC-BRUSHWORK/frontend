import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import * as A from './ArtworkDetail.style';
import IMAGES from '../../../assets';
import Profile from '../../../components/common/profile/Profile';
import RowArtworkList from '../../../components/common/artworkList/RowArtWorkList';
import ReviewList from '../../../components/artist/reviewList/ReviewList';
import reviewDummy from '../../../constants/reviewsDummy';
import { getProductList } from '../../../apis/getProductList';
import { getProduct } from '../../../apis/getProduct';
import Topbar from '../../../components/common/topbar/Topbar';

function ArtworkDetail() {
  const [productInfo, setProductInfo] = useState({});
  const [favorite, setFavorite] = useState(false);

  const handleClick = () => {
    setFavorite(!favorite);
  };

  // 작품조회
  const [productList, setProductList] = useState([]);
  const getProducts = async ({ cursorId, paging }) => {
    try {
      const res = await getProductList({ cursorId, paging });
      setProductList(res.result.categoryData);
    } catch (error) {
      console.log(error);
    }
  };

  // 작품 상세 조회
  let { productId } = useParams();
  productId = parseInt(productId, 10);

  const getProductId = async (Id) => {
    try {
      const res = await getProduct(Id);
      setProductInfo(res.result);
      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  useEffect(() => {
    const cursorId = null;
    const paging = 6;
    getProducts({ cursorId, paging });
    getProductId(productId);
  }, [productId]);

  return (
    <Wrapper>
      <Topbar />
      <A.Image src={productInfo.image} />
      <A.Wrapper>
        <A.TitleWrapper>
          <A.Title>{productInfo.title}</A.Title>
          <A.Report src={IMAGES.emergency} />
        </A.TitleWrapper>
        <A.Artist>{productInfo.authorNickname}</A.Artist>
        <A.Description>{productInfo.description}</A.Description>
        <A.Category>한국화</A.Category>
        <A.SubWrapper>
          <A.Price>{productInfo.price}원</A.Price>
          <A.Delivery>
            {productInfo.delivery === 0 ? '택배' : '직거래'}
          </A.Delivery>
        </A.SubWrapper>
        <A.Divider />
        <A.Margin>
          <Profile />
        </A.Margin>
        <A.Margin>
          <A.Text>작가의 다른 작품</A.Text>
          <RowArtworkList data={productList} />
        </A.Margin>
        <ReviewList data={reviewDummy} />
      </A.Wrapper>
      <A.BottomWrapper>
        <A.FavoriteBtn
          onClick={handleClick}
          src={favorite ? IMAGES.favoriteOn : IMAGES.favoriteOff}
        />
        <A.AskBtn>문의하기</A.AskBtn>
      </A.BottomWrapper>
    </Wrapper>
  );
}

export default ArtworkDetail;

const Wrapper = styled.div`
  margin-bottom: 6rem;
  position: relative;
  height: 100%;
`;
