import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import * as W from './WrittenReview.style';
import IMAGES from '../../../assets';
import ReviewDelete from '../../modal/ReviewDelete';
import { getProduct } from '../../../apis/getProduct';

function WrittenReview({ reviewData }) {
  const { productId, date, context } = reviewData || {};
  const [productData, setProductData] = useState();
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const getProductData = async (PID) => {
    const { result } = await getProduct(PID);
    setProductData(result);
    console.log(result);
    console.log(productData);
  };

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };

  useEffect(() => {
    getProductData(productId);
  }, []);

  return (
    <W.ReviewContainer>
      {productData && (
        <W.ArtInfoWrapper>
          <W.ArtWorkImage src={productData.image} alt="Artwork" />
          <W.ArtInfoContainer>
            <W.ArtWorkArtist>{productData.authorNickname}</W.ArtWorkArtist>
            <Link to={`/product/${productId}`}>
              <W.ArtWorkName>
                {productData.title}
                <W.RightButton src={IMAGES.rightButtonBlack} />
              </W.ArtWorkName>
            </Link>
          </W.ArtInfoContainer>
          <W.EditDeleteButton src={IMAGES.trash} onClick={handleDeleteClick} />
        </W.ArtInfoWrapper>
      )}
      <W.ReviewText>{context}</W.ReviewText>
      <W.ReviewDate>{date}</W.ReviewDate>
      {isDeleteModalOpen && <ReviewDelete onClose={handleCloseModal} />}
    </W.ReviewContainer>
  );
}

export default WrittenReview;
