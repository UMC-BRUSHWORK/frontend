import React from 'react';
import PurchaseReview from './PurchaseReview';
import PurchaseReviewButton from '../button/PurchaseReviewButton';
import * as P from './PurchaseReviewList.style';

function PurchaseReviewList() {
  const dummyData = [
    {
      id: 1,
      nickname: '닉네임',
      date: '2023.12.07',
      review:
        '작품 너무 예쁘고 완충도 잘 해주십니다! 작품 너무 예쁘고 완충도 잘 해주십니다! 작품 너무 예쁘고 완충도 잘해주십니다!작품 너무 예쁘고 완충도 잘해주십니다!작품 너무 예쁘고 완충도 잘해주십니다!',
    },
    {
      id: 2,
      nickname: '닉네임',
      date: '2023.12.14',
      review: '작품 어쩌구 저쩌구',
    },
    {
      id: 3,
      nickname: '닉네임',
      date: '2023.12.19',
      review: '리뷰',
    },
    {
      id: 4,
      nickname: '닉네임',
      date: '2023.12.22',
      review: '리뷰2',
    },
  ];

  return (
    <>
      <PurchaseReviewButton />
      <P.ScrollableReviewList>
        {dummyData.map((data) => (
          <PurchaseReview
            key={data.id}
            nickname={data.nickname}
            date={data.date}
            review={data.review}
          />
        ))}
      </P.ScrollableReviewList>
    </>
  );
}

export default PurchaseReviewList;
