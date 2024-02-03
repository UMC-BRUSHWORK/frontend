import React, { useState } from 'react';
import * as W from './WrittenReview.style';
import IMAGES from '../../../assets';
import ReviewDelete from '../../modal/ReviewDelete';

function WrittenReview({ reviewData }) {
  const { img, artist, name, date, review } = reviewData || {};
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const handleDeleteClick = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };

  return (
    <W.ReviewContainer>
      <W.ArtInfoWrapper>
        <W.ArtWorkImage src={img} alt="Artwork" />
        <W.ArtInfoContainer>
          <W.ArtWorkArtist>{artist}</W.ArtWorkArtist>
          <W.ArtWorkName>
            {name}
            <W.RightButton src={IMAGES.rightButtonBlack} />
          </W.ArtWorkName>
        </W.ArtInfoContainer>
        <W.EditDeleteButton src={IMAGES.trash} onClick={handleDeleteClick} />
      </W.ArtInfoWrapper>
      <W.ReviewText>{review}</W.ReviewText>
      <W.ReviewDate>{date}</W.ReviewDate>
      {isDeleteModalOpen && <ReviewDelete onClose={handleCloseModal} />}
    </W.ReviewContainer>
  );
}

export default WrittenReview;
