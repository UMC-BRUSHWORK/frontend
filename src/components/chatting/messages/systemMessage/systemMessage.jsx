import React from 'react';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import * as M from './systemMessage.style';

export default function SytemMessage({
  message,
  time,
  today,
  profile,
  buyerProfile,
  sellerProfile,
  isRead,
  price,
}) {
  const userId = localStorage.getItem('userId');
  let imgSrc = sellerProfile;
  const read = !!isRead;

  let isSentByCurrentUser = false;

  if (message.senderId === Number(userId)) {
    isSentByCurrentUser = true;
    imgSrc = buyerProfile;
  }

  const generateRandomString = () => window.btoa(Math.random()).slice(0, 20);

  const clientKey = 'test_ck_E92LAa5PVbJJQoY6logPV7YmpXyJ';
  const handleClickButton = async () => {
    try {
      const tossPayments = await loadTossPayments(clientKey);
      const orderId = generateRandomString();
      const amount = 20000;
      const orderName = '토스 티셔츠';
      const customerName = '김토스';

      await tossPayments.requestPayment('카드', {
        amount,
        orderId,
        orderName,
        customerName,
        successUrl: `${window.location.origin}/success${window.location.search}`,
        failUrl: `${window.location.origin}/fail${window.location.search}`,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {isSentByCurrentUser ? (
        <M.MessageWrapper $right>
          <M.Read $visible={!isRead}>1</M.Read>
          <M.Time $right>{time}</M.Time>
          <M.MessageBox $right>
            작가님이 결제를 요청했어요!
            <br />
            요청 금액 : {price} 원
            <M.Button onClick={() => handleClickButton()}>결제하기</M.Button>
          </M.MessageBox>
        </M.MessageWrapper>
      ) : (
        <M.MessageWrapper>
          <M.ProfileImage $visible={profile} src={imgSrc} />
          <M.MessageBox>
            작가님이 결제를 요청했어요!
            <br />
            요청 금액 : {price} 원
            <M.Button onClick={() => handleClickButton()}>결제하기</M.Button>
          </M.MessageBox>
          <M.Time>{time}</M.Time>
          <M.Read $visible={!read}>1</M.Read>
        </M.MessageWrapper>
      )}
      <M.Date>{today}</M.Date>
    </div>
  );
}
