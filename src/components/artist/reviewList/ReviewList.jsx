import React from 'react';
import Review from '../review/Review';
import reviewDummy from '../../../constants/reviewsDummy';
import * as S from './ReviewList.style';

export default function ReviewList() {
  const count = reviewDummy.length;
  return (
    <S.Wrapper>
      <S.Text>
        <S.Count>{count}</S.Count>
        개의 거래 후기
      </S.Text>
      {reviewDummy.map((item) => (
        <Review
          key={item.id}
          nickname={item.nickname}
          date={item.date}
          review={item.review}
        />
      ))}
    </S.Wrapper>
  );
}
