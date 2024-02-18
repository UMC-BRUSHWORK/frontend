import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as U from './ArtworkUpload.style';
import CategoryList from '../../../components/common/category/CategoryList';
import IMAGES from '../../../assets';
import Topbar from '../../../components/common/topbar/Topbar';
import categoryDummy from '../../../constants/categoryDummy';
import deliveryDummy from '../../../constants/deliveryDummy';
import { postProduct } from '../../../apis/postProduct';
import LoginModal from '../../../components/modal/LoginModal';
import { isLogin } from '../../../utils/isLogin';

function ArtworkUpload() {
  const navigate = useNavigate();
  const [images, setImages] = useState(null);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [details, setDetails] = useState('');
  const [uploadImage, setUploadImage] = useState(null);
  const [status, setStatus] = useState(false);
  const [delivery, setDelivery] = useState([]);
  const [category, setCategory] = useState([]);

  const [titleError, setTitleError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [detailError, setDetailError] = useState(false);

  const onChangeImage = (e) => {
    const file = e.target.files[0];
    setImages(file);
    const imageUrl = URL.createObjectURL(file);
    setUploadImage(imageUrl);
  };

  const handleCategoryClick = (selectedCategory) => {
    if (category.includes(selectedCategory)) {
      setCategory((prev) => prev.filter((value) => value !== selectedCategory));
      return;
    }
    setCategory((prev) => [...prev, selectedCategory]);
  };

  const handleDeliveryClick = (selectedDelivery) => {
    console.log(selectedDelivery - 1);
    if (delivery.includes(selectedDelivery)) {
      setDelivery((prev) => prev.filter((value) => value !== selectedDelivery));
      return;
    }
    setDelivery((prev) => [...prev, selectedDelivery]);
  };

  const handleSubmit = async () => {
    if (title.length < 3 || title.length > 30) {
      setTitleError(true);
    } else if (price <= 0 || price > 100000 || isNaN(price)) {
      setPriceError(true);
    } else if (details.length < 10 || details.length > 500) {
      setDetailError(true);
    } else if (status && !titleError && !priceError && !detailError) {
      const token = localStorage.getItem('token');
      const hashtag = '';
      const userId = 24;
      const nickname = 'test';

      const formData = new FormData();
      formData.append('images', images);
      formData.append('title', title);
      formData.append('authorId', userId);
      formData.append('authorNickname', nickname);
      formData.append('delivery', delivery - 1);
      formData.append('price', price);
      formData.append('details', details);
      formData.append('category', category);
      formData.append('hashtag', hashtag);

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
    if (
      uploadImage &&
      title &&
      price &&
      details.length >= 10 &&
      details.length <= 500 &&
      category.length > 0 &&
      delivery.length > 0
    ) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  }, [title, price, details, uploadImage, category, delivery]);

  return isLogin() ? (
    <>
      <Topbar />
      <U.Wrapper>
        <U.UploadWrapper>
          <U.Image type="file" accept="image/*" onChange={onChangeImage} />
          <U.Photo src={IMAGES.photo} />
          {uploadImage && <U.UploadImage src={uploadImage} />}
        </U.UploadWrapper>
        <U.SectionTitle isError={titleError}>작품 제목</U.SectionTitle>
        <U.InputText
          placeholder="최소 3자 ~ 최대 30자"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <U.BottomLine active={title !== ''} isError={titleError} />
        <CategoryList
          data={categoryDummy}
          title="카테고리"
          selectedItems={category}
          onClick={handleCategoryClick}
        />
        <U.SectionTitle>작품 가격</U.SectionTitle>
        <U.InputText
          type="number"
          placeholder="￦"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <U.BottomLine active={price !== ''} />
        <CategoryList
          data={deliveryDummy}
          title="배송 방식"
          selectedItems={delivery}
          style={{ marginBottom: '2rem' }}
          onClick={handleDeliveryClick}
        />
        <U.SectionTitle isError={detailError}>상세 설명</U.SectionTitle>
        <U.Description
          isError={detailError}
          placeholder="최소 10자 ~ 최대 500자"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />
      </U.Wrapper>
      <U.WriteCompleteBtn status={status} onClick={handleSubmit}>
        작성 완료
      </U.WriteCompleteBtn>
    </>
  ) : (
    <LoginModal />
  );
}

export default ArtworkUpload;
