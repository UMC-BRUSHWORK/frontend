import React, { useEffect, useState } from 'react';
import * as P from './PurchasedModal.style';
import Buyer from './Buyer';
import { getChatBuyerList } from '../../../apis/getChatBuyerList';
import { patchDeal } from '../../../apis/patchDeal';

function PurchasedModal({ onClose, authorId, productId }) {
  const [buyerList, setBuyerList] = useState([]);
  const [selectedBuyerId, setSelectedBuyerId] = useState(null);
  const [token, setToken] = useState(null);

  const getChatList = async (AID, PID) => {
    try {
      const res = await getChatBuyerList({ AID, PID });
      console.log(res);
      setBuyerList(res.result.productChatList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getChatList(authorId, productId);

    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const handleBuyerSelect = (consumerId) => {
    setSelectedBuyerId(consumerId);
  };

  const patchDealRes = async ({ consumerId = selectedBuyerId }) => {
    try {
      const res = await patchDeal({ token, productId, consumerId, authorId });
      onClose();
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <P.ModalBackground>
      <P.Wrapper>
        <P.Title>구매자의 닉네임을 선택해주세요.</P.Title>
        {buyerList.length === 0 ? (
          <P.NoChat>채팅 목록이 존재하지 않습니다</P.NoChat>
        ) : (
          buyerList.map((data) => (
            <>
              <Buyer data={data} onBuyerSelect={handleBuyerSelect} />
              <P.Divider />
            </>
          ))
        )}
        <P.BtnWrapper>
          <P.CancelBtn onClick={onClose}>취소</P.CancelBtn>
          <P.CompleteBtn onClick={patchDealRes} disabled={!selectedBuyerId}>
            {' '}
            판매 완료
          </P.CompleteBtn>
        </P.BtnWrapper>
      </P.Wrapper>
    </P.ModalBackground>
  );
}

export default PurchasedModal;
