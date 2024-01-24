import React, { useState } from 'react';
import ReviewButton from '../../components/common/button/ReviewButton';
import Topbar from '../../components/common/topbar/Topbar';
import ArtWorkInfo from '../../components/common/artwork/ArtWorkInfo';
import ReviewDescription from '../../components/common/myPage/ReviewDescription';
import IMAGES from '../../assets';

export default function WriteReviewPage() {
  const [description, setDescription] = useState('');
  const artworkData = {
    img: IMAGES.artWork9,
    name: '작품 이름',
    artist: '작가명',
    price: 100000,
  };
  const handleDescriptionChange = (newDescription) => {
    setDescription(newDescription);
  };

  console.log(description);

  return (
    <>
      <Topbar />
      <ArtWorkInfo
        img={artworkData.img}
        name={artworkData.name}
        artist={artworkData.artist}
        price={artworkData.price.toLocaleString()}
      />
      <ReviewButton />
      <ReviewDescription onDescriptionChange={handleDescriptionChange} />
    </>
  );
}
