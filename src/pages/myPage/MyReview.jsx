import React from 'react';
import styled from 'styled-components';
import PurchasedBar from '../../components/common/bar/PurchasedBar';
import PurchasedTopbar from '../../components/common/topbar/PurchasedTopbar';
import WrittenReview from '../../components/common/myPage/WrittenReview';
import writtenReviewDummy from '../../constants/writtenReviewDummy';
import font from '../../styles/font';
import color from '../../styles/color';

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
  const numberofReviews = writtenReviewDummy.length;

  return (
    <>
      <PurchasedTopbar />
      <PurchasedBar />
      <ReviewLength>
        {`${numberofReviews}`}
        <ReviewText>개의 후기</ReviewText>
      </ReviewLength>
      {writtenReviewDummy.map((reviewData) => (
        <WrittenReview reviewData={reviewData} />
      ))}
    </>
  );
}
