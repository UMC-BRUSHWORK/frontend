import React, { useEffect, useState } from 'react';
import * as U from './ArtworkUpload.style';
import CategoryList from '../../../components/common/category/CategoryList';
import IMAGES from '../../../assets';
import Topbar from '../../../components/common/topbar/Topbar';
import categoryDummy from '../../../constants/categoryDummy';
import deliveryDummy from '../../../constants/deliveryDummy';
import { postProduct } from '../../../apis/postProduct';

function ArtworkUpload() {
  const [images, setImages] = useState(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');
  const [uploadImage, setUploadImage] = useState(null);
  const [status, setStatus] = useState(false);

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImages(file);
    const imageUrl = URL.createObjectURL(file);
    setUploadImage(imageUrl);
  };

  const handleSubmit = async () => {
    if (status) {
      // dummy
      const authorId = 1;
      const authorNickname = 'brushwork';
      const delivery = 0;
      const category = '1,2,3';

      const data = {
        images,
        title,
        price,
        details,
        authorId,
        authorNickname,
        delivery,
        category,
      };
      console.log(data);
      const res = await postProduct(data);
      console.log(res);
    }
  };

  useEffect(() => {
    if (uploadImage && title && price && details) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [title, price, details, uploadImage]);

  return (
    <>
      <Topbar />
      <U.Wrapper>
        <U.UploadWrapper>
          <U.Image type="file" accept="image/*" onChange={onChangeImage} />
          <U.Photo src={IMAGES.photo} />
          {uploadImage && <U.UploadImage src={uploadImage} />}
        </U.UploadWrapper>
        <U.SectionTitle>작품 제목</U.SectionTitle>
        <U.InputText
          placeholder="최소 3자 ~ 최대 30자"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <U.BottomLine active={title !== ''} />
        <CategoryList data={categoryDummy} title="카테고리" />
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
        <U.SectionTitle>상세 설명</U.SectionTitle>
        <U.Description
          placeholder="최소 10자 ~ 최대 500자"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </U.Wrapper>
      <U.WriteCompleteBtn status={status} onClick={handleSubmit}>
        작성 완료
      </U.WriteCompleteBtn>
    </>
  );
}

export default ArtworkUpload;
