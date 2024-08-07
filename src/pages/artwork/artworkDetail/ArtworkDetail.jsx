/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate, Link } from 'react-router-dom';
import * as A from './ArtworkDetail.style';
import IMAGES from '../../../assets';
import Profile from '../../../components/common/profile/Profile';
import RowArtworkList from '../../../components/common/artworkList/RowArtWorkList';
import ReviewList from '../../../components/artist/reviewList/ReviewList';
import { getProductList } from '../../../apis/getProductList';
import { getProduct } from '../../../apis/getProduct';
import Topbar from '../../../components/common/topbar/Topbar';
import Favorite from '../../../components/favorite/Favorite';
import { postCreateRoom } from '../../../apis/createChattingRoom';
import { getUserInfo } from '../../../apis/getUserInfo';
import PageLinkButton from '../../../components/common/button/PageLinkButton';
import { getArtistReviewList } from '../../../apis/getArtistReviewList';
import ReportModal from '../../../components/modal/report/ReportModal';
import CompleteBtn from '../../../components/artwork/CompleteBtn';

function ArtworkDetail() {
  const [productInfo, setProductInfo] = useState({});
  const [category, setCategory] = useState([]);
  const [favorite, setFavorite] = useState(false);
  const [sellerId, setSellerId] = useState(null);
  const [userInfo, setUserInfo] = useState();
  const [authorId, setAuthorId] = useState(0);
  const userId = parseInt(localStorage.getItem('userId'), 10);
  const navigate = useNavigate();

  // 작품조회
  const [productList, setProductList] = useState([]);

  // 1. url에서 작품 id 얻어오기
  let { productId } = useParams();
  productId = parseInt(productId, 10);

  // 작가 정보 조회
  const getUser = async (userID) => {
    try {
      const res = await getUserInfo(userID);
      return res;
    } catch (error) {
      console.log(error);
    }
  };

  // 2. 작품 상세 조회
  const getProductId = async (Id) => {
    try {
      const res = await getProduct(Id);

      setProductInfo(res.result);
      setAuthorId(res.result.authorId);

      // 3. 유저 정보 불러오기
      const userRes = await getUser(res.result.authorId);
      setUserInfo(userRes.result);

      // 찜하기
      setFavorite(res.result.favor);
      setSellerId(res.result.authorId);

      const values = res.result.category.map((obj) => Object.values(obj)[0]);
      setCategory(values);

      return res;
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  // 작가의 다른 작품 조회
  const getProducts = async ({ cursorId, paging }) => {
    try {
      const res = await getProductList({ cursorId, paging });
      setProductList(res.result.categoryData);
    } catch (error) {
      console.log(error);
    }
  };

  // 리뷰
  const [reviewList, setReviewList] = useState();

  const getArtistReview = async (UID) => {
    const { result } = await getArtistReviewList(UID);
    setReviewList(result.reviewListData);
    console.log(reviewList);
  };

  useEffect(() => {
    const cursorId = null;
    const paging = 6;
    getProductId(productId);
    getProducts({ cursorId, paging });

    getArtistReview(authorId);
  }, [productId, authorId]);

  const clickButton = async () => {
    try {
      const createRoomRes = await postCreateRoom({
        buyerId: userId,
        sellerId,
        productId,
      });
      console.log(createRoomRes);
      navigate(`/chatting-list/chatting?roomID=${createRoomRes.result.roomId}`);
    } catch (error) {
      console.error('방생성 오류 발생', error);
    }
  };

  useEffect(() => {
    const cursorId = null;
    const paging = 6;
    getProductId(productId);
    getProducts({ cursorId, paging });
  }, [productId]);

  return (
    <Wrapper>
      <Topbar />
      <A.Image src={productInfo.image} />
      <A.Wrapper>
        <A.TitleWrapper>
          <A.Title>{productInfo.title}</A.Title>
          <ReportModal author={productInfo.authorId} />
        </A.TitleWrapper>
        <A.Artist>{productInfo.authorNickname}</A.Artist>
        <A.Description>{productInfo.description}</A.Description>
        <A.CategoryWrapper>
          {category.map((item, key) => (
            <A.Category key={key}>{item}</A.Category>
          ))}
        </A.CategoryWrapper>
        <A.SubWrapper>
          <A.Price>{(productInfo.price || {}).toLocaleString()}원</A.Price>
          <A.Delivery>
            {productInfo.delivery === 0 ? '택배' : '직거래'}
          </A.Delivery>
        </A.SubWrapper>
        <A.Divider />
        <A.Margin>
          {userInfo && (
            <Link to={`/artist/${userInfo.userId}`}>
              <A.ProfileWrapper>
                <Profile
                  image={userInfo.userProfile}
                  nickname={userInfo.userNickname}
                  introduce={userInfo.userIntroduce}
                />
                <A.RightButton src={IMAGES.rightButtonGrey} alt="rightButton" />
              </A.ProfileWrapper>
            </Link>
          )}
        </A.Margin>
        {userInfo && (
          <A.Margin>
            <PageLinkButton page="작가의 다른 작품" userId={userInfo.userId} />
            <RowArtworkList data={productList} />
          </A.Margin>
        )}
        {reviewList && <ReviewList data={reviewList} />}
      </A.Wrapper>

      {userId === productInfo.authorId ? (
        <A.BottomWrapper>
          <CompleteBtn
            authorId={authorId}
            productId={productId}
            productInfo={productInfo}
          />
        </A.BottomWrapper>
      ) : (
        <A.BottomWrapper>
          <A.FavoriteBtn>
            <Favorite favorStatus={favorite} productId={productId} />
          </A.FavoriteBtn>
          <A.AskBtn onClick={clickButton}>문의하기</A.AskBtn>
        </A.BottomWrapper>
      )}
    </Wrapper>
  );
}

export default ArtworkDetail;

const Wrapper = styled.div`
  margin-bottom: 6rem;
  position: relative;
  height: 100%;
`;
