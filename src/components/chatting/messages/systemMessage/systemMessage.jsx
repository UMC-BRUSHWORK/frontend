import React from 'react';
import { loadTossPayments } from '@tosspayments/payment-sdk';
import { useNavigate } from 'react-router-dom';
import queryString from 'query-string';
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
  chattingInfo,
}) {
  const { roomID } = queryString.parse(window.location.search);
  const userId = localStorage.getItem('userId');
  let imgSrc = sellerProfile;
  const read = !!isRead;

  const navigate = useNavigate();

  let isSentByCurrentUser = false;

  if (message.senderId === Number(userId)) {
    isSentByCurrentUser = true;
    imgSrc = buyerProfile;
  }

  const generateRandomString = () => window.btoa(Math.random()).slice(0, 20);

  const clientKey = 'test_ck_E92LAa5PVbJJQoY6logPV7YmpXyJ';
  const handleClickPayButton = async () => {
    try {
      const tossPayments = await loadTossPayments(clientKey);
      const orderId = generateRandomString();
      const amount = price;
      const orderName = chattingInfo.productName;
      const customerName = chattingInfo.sellerNickname;

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

  const handleClickCheckButton = () => {
    navigate(`/bill?id=${roomID}`);
  };

  return (
    <div>
      {isSentByCurrentUser ? (
        <M.MessageWrapper $right>
          <M.Read $visible={!isRead}>1</M.Read>
          <M.Time $right>{time}</M.Time>
          {message.message === '작가님이 결제를 요청했어요!' ? (
            <M.MessageBox $right>
              작가님이 결제를 요청했어요!
              <br />
              요청 금액 : {price} 원
              <M.Button onClick={() => handleClickPayButton()}>
                결제하기
              </M.Button>
            </M.MessageBox>
          ) : (
            <M.MessageBox $right>
              결제가 완료되었어요!
              <M.Button onClick={() => handleClickCheckButton()}>
                결제 내역 보기
              </M.Button>
            </M.MessageBox>
          )}
        </M.MessageWrapper>
      ) : (
        <M.MessageWrapper>
          <M.ProfileImage $visible={profile} src={imgSrc} />
          {message.message === '작가님이 결제를 요청했어요!' ? (
            <M.MessageBox $right>
              작가님이 결제를 요청했어요!
              <br />
              요청 금액 : {price} 원
              <M.Button onClick={() => handleClickPayButton()}>
                결제하기
              </M.Button>
            </M.MessageBox>
          ) : (
            <M.MessageBox $right>
              결제가 완료되었어요!
              <M.Button onClick={() => handleClickCheckButton()}>
                결제 내역 보기
              </M.Button>
            </M.MessageBox>
          )}
          <M.Time>{time}</M.Time>
          <M.Read $visible={!read}>1</M.Read>
        </M.MessageWrapper>
      )}
      <M.Date>{today}</M.Date>
    </div>
  );
}
