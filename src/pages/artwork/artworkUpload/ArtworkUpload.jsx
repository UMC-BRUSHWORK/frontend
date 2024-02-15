import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as U from './ArtworkUpload.style';
import CategoryList from '../../../components/common/category/CategoryList';
import IMAGES from '../../../assets';
import Topbar from '../../../components/common/topbar/Topbar';
import categoryDummy from '../../../constants/categoryDummy';
import deliveryDummy from '../../../constants/deliveryDummy';
import { postProduct } from '../../../apis/postProduct';

function ArtworkUpload() {
  const navigate = useNavigate();
  const [images, setImages] = useState(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');
  const [uploadImage, setUploadImage] = useState(null);
  const [status, setStatus] = useState(false);
  const [hashtag, setHashtag] = useState('');

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    console.log(file);
    setImages(file);
    const imageUrl = URL.createObjectURL(file);
    setUploadImage(imageUrl);
  };

  const handleHashtagClick = (selectedHashtag) => {
    console.log(selectedHashtag);
    setHashtag(selectedHashtag);
  };

  const handleSubmit = async () => {
    if (status) {
      const token = localStorage.getItem('token');

      // dummy
      const authorId = 1;
      const authorNickname = 'brushwork';
      const delivery = 0;
      const category = '1,2,3';

      const formData = new FormData();
      formData.append('images', images);
      formData.append('title', title);
      formData.append('authorId', authorId);
      formData.append('authorNickname', authorNickname);
      formData.append('delivery', delivery);
      formData.append('price', price);
      formData.append('details', details);
      formData.append('hashtag', hashtag);
      formData.append('category', category);

      try {
        const res = await postProduct({ formData, token });
        console.log(res);
        navigate('/');
      } catch (error) {
        console.error(error);
      }
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
        <CategoryList
          data={categoryDummy}
          title="카테고리"
          onHashtagClick={handleHashtagClick}
        />
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
