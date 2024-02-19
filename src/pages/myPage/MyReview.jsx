import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WrittenReview from '../../components/common/myPage/WrittenReview';
import writtenReviewDummy from '../../constants/writtenReviewDummy';
import font from '../../styles/font';
import color from '../../styles/color';
import { getMyReviewList } from '../../apis/getMyReviewList';

const ReviewLength = styled.div`
  display: flex;
  margin: 1.6rem 0 0 1.6rem;
  ${() => font.regular_10};
  color: ${color.primary_normal};
`;

const ReviewText = styled.div`
  ${() => font.regular_10};
  color: ${color.black};
`;

export default function MyReview() {
  const [reviewList, setReviewList] = useState();
  const numberofReviews = writtenReviewDummy.length;

  const getMyReview = async (userId, token) => {
    const { result } = await getMyReviewList(userId, token);
    console.log(result);
    setReviewList(result.reviewListData);
    console.log(reviewList);
  };

  useEffect(() => {
    const userId = parseInt(localStorage.getItem('userId'), 10);
    const token = localStorage.getItem('token');
    getMyReview(userId, token);
  }, []);

  return (
    <>
      <ReviewLength>
        {`${numberofReviews}`}
        <ReviewText>개의 후기</ReviewText>
      </ReviewLength>
      {reviewList &&
        reviewList.map((reviewData) => (
          <WrittenReview reviewData={reviewData} />
        ))}
    </>
  );
}
