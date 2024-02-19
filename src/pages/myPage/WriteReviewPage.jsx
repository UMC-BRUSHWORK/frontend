import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ReviewButton from '../../components/common/button/ReviewButton';
import Topbar from '../../components/common/topbar/Topbar';
import ArtWorkInfo from '../../components/common/artwork/ArtWorkInfo';
import ReviewDescription from '../../components/common/myPage/ReviewDescription';
import { getProduct } from '../../apis/getProduct';
import WriteCompleteButton from '../../components/common/button/WriteCompleteButton';

export default function WriteReviewPage() {
  const [reviewRate, setRate] = useState(5);
  const [reviewContent, setDescription] = useState('');
  const [productData, setProductData] = useState();

  let { productId } = useParams();
  productId = parseInt(productId, 10);

  const getProductData = async (PID) => {
    const { result } = await getProduct(PID);
    setProductData(result);
  };

  const handleReviewChange = (newRate) => {
    setRate(newRate);
  };

  const handleDescriptionChange = (newDescription) => {
    setDescription(newDescription);
  };

  const userId = parseInt(localStorage.getItem('userId'), 10);

  const props = {
    userId,
    productId,
    reviewRate,
    reviewContent,
  };

  const renderButton = () => {
    if (reviewContent.length === 0) {
      return <WriteCompleteButton type="WriteOffButton" />;
    }
    return <WriteCompleteButton data={props} type="WriteOnMypageButton" />;
  };

  useEffect(() => {
    getProductData(productId);
  }, []);

  return (
    <>
      <Topbar />
      {productData && (
        <div>
          <ArtWorkInfo
            img={productData.image}
            name={productData.title}
            artist={productData.authorNickname}
            price={productData.price.toLocaleString()}
          />
          <ReviewButton
            onReviewSelect={handleReviewChange}
            artistName={productData.authorNickname}
          />
        </div>
      )}
      <ReviewDescription onDescriptionChange={handleDescriptionChange} />
      {renderButton()}
    </>
  );
}
