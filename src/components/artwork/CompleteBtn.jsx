import React, { useState } from 'react';
import * as A from '../../pages/artwork/artworkDetail/ArtworkDetail.style';
import PurchasedModal from '../modal/purchased/PurchasedModal';

function CompleteBtn({ authorId, productId, productInfo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const complete = !!productInfo.status;
  console.log(complete);

  const openModal = () => {
    if (complete) setIsModalOpen(false);
    else setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <A.CompleteBtn onClick={openModal} complete={complete}>
        판매완료
      </A.CompleteBtn>
      {isModalOpen && (
        <PurchasedModal
          onClose={closeModal}
          authorId={authorId}
          productId={productId}
        />
      )}
    </>
  );
}

export default CompleteBtn;
