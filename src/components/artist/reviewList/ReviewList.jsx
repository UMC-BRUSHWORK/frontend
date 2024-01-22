import React from 'react';
import Review from '../review/Review';
import * as S from './ReviewList.style';

export default function ReviewList({ data }) {
  const count = data.length;
  return (
    <S.Wrapper>
      <S.Text>
        <S.Count>{count}</S.Count>
        개의 거래 후기
      </S.Text>
      {data.map((item) => (
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
