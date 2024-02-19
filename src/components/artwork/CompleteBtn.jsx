import React, { useState } from 'react';
import * as A from '../../pages/artwork/artworkDetail/ArtworkDetail.style';
import PurchasedModal from '../modal/purchased/PurchasedModal';

function CompleteBtn({ authorId, productId }) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return(
        <>
            <A.CompleteBtn onClick={openModal}>판매완료</A.CompleteBtn>
            {isModalOpen && 
                (<PurchasedModal 
                    onClose={closeModal}
                    authorId={authorId}
                    productId={productId}
                    />)}
        </>
    );
}

export default CompleteBtn;