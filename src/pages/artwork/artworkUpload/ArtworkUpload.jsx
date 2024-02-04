import React, { useState } from 'react';
import * as U from './ArtworkUpload.style';
import CategoryList from '../../../components/common/category/CategoryList';
import Description from '../../../components/common/description/Description';
import IMAGES from '../../../assets';
import Topbar from '../../../components/common/topbar/Topbar';
import categoryDummy from '../../../constants/categoryDummy';
import deliveryDummy from '../../../constants/deliveryDummy';

function ArtworkUpload() {

  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');

  return (
    <>
    <U.Wrapper>
      <Topbar/>
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
      <CategoryList 
        data={categoryDummy} 
        title="카테고리" />
      <U.SectionTitle>작품 가격</U.SectionTitle>
      <U.InputText
        placeholder="￦"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <U.BottomLine active={price !== ''} />
      <CategoryList
        data={deliveryDummy}
        title="배송 방식"
        style={{ marginBottom: '2rem' }}
      />
      <Description />
    </U.Wrapper>
    <U.WriteCompleteBtn>작성 완료</U.WriteCompleteBtn>
    </>
  );
}

export default ArtworkUpload;
