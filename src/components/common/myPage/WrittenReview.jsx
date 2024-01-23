import React, { useState } from 'react';
import * as W from './WrittenReview.style';
import IMAGES from '../../../assets';

function WrittenReview({ reviewData }) {
  const { img, artist, name, date, review } = reviewData || {};

  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
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
        <W.EditDeleteButton src={IMAGES.moreVert} onClick={toggleDropdown} />
      </W.ArtInfoWrapper>
      {dropdownVisible && (
        <W.DropdownMenu>
          <W.DropdownItem>수정하기</W.DropdownItem>
          <W.DropdownItem>삭제하기</W.DropdownItem>
        </W.DropdownMenu>
      )}
      <W.ReviewText>{review}</W.ReviewText>
      <W.ReviewDate>{date}</W.ReviewDate>
    </W.ReviewContainer>
  );
}

export default WrittenReview;
