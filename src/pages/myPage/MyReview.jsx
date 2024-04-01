import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import WrittenReview from '../../components/common/myPage/WrittenReview';
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

  const getMyReview = async (userId) => {
    const { result } = await getMyReviewList(userId);
    setReviewList(result.reviewListData);
  };

  useEffect(() => {
    const userId = parseInt(localStorage.getItem('userId'), 10);
    getMyReview(userId);
  }, []);

  return (
    <div>
      <ReviewLength>
        {reviewList && reviewList.length ? reviewList.length : 0}
        <ReviewText>개의 후기</ReviewText>
      </ReviewLength>
      {reviewList &&
        reviewList.map((reviewData) => (
          <WrittenReview reviewData={reviewData} />
        ))}
    </div>
  );
}
