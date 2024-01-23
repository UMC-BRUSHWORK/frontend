import React, { useState } from 'react';
import * as U from './ArtworkUpload.style';
import Category from '../../../components/common/category/Category';
import Description from '../../../components/common/description/Description';
import WriteCompleteButton from '../../../components/common/button/WriteCompleteButton';
import IMAGES from '../../../assets';

function ArtworkUpload() {
  const CATEGORY = [
    { id: 1, label: '조소' },
    { id: 2, label: '한국화' },
    { id: 3, label: '동양화' },
    { id: 4, label: '서양화' },
    { id: 5, label: '일러스트' },
    { id: 6, label: '디자인' },
    { id: 7, label: '공예' },
    { id: 8, label: '수채화' },
  ];

  const DELIVERY = [
    { id: 1, label: '택배' },
    { id: 2, label: '직거래' },
  ];

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [state, setState] = useState(false);

  console.log(setState);

  return (
    <U.Wrapper>
      <U.Image>
        <U.Photo src={IMAGES.photo} />
      </U.Image>
      <U.SectionTitle>작품 제목</U.SectionTitle>
      <U.InputText
        placeholder="최소 3자 ~ 최대 30자"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <U.BottomLine active={title !== ''} />
      <Category chips={CATEGORY} title="카테고리" />
      <U.SectionTitle>작품 가격</U.SectionTitle>
      <U.InputText
        placeholder="￦"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <U.BottomLine active={price !== ''} />
      <Category
        chips={DELIVERY}
        title="배송 방식"
        style={{ marginBottom: '2rem' }}
      />
      <Description />
      <WriteCompleteButton state={state} />
    </U.Wrapper>
  );
}

export default ArtworkUpload;
