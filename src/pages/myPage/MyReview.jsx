import React from 'react';
import PurchasedBar from '../../components/common/bar/PurchasedBar';
import WrittenReview from '../../components/common/myPage/WrittenReview';

export default function MyReview() {
  return (
    <>
      <PurchasedBar />
      <WrittenReview reviewData={dummyData} />
    </>
  );
}
