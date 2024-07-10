import React from 'react';
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

  return (
    <div>
      {isSentByCurrentUser ? (
        <M.MessageWrapper $right>
          <M.Read $visible={!isRead}>1</M.Read>
          <M.Time $right>{time}</M.Time>
          <M.MessageBox $right>
            작가님이 결제를 요청했어요!
            <br />
            요청 금액 : {price} 원<M.Button>결제하기</M.Button>
          </M.MessageBox>
        </M.MessageWrapper>
      ) : (
        <M.MessageWrapper>
          <M.ProfileImage $visible={profile} src={imgSrc} />
          <M.MessageBox>
            작가님이 결제를 요청했어요!
            <br />
            요청 금액 : {price} 원
          </M.MessageBox>
          <M.Time>{time}</M.Time>
          <M.Read $visible={!read}>1</M.Read>
        </M.MessageWrapper>
      )}
      <M.Date>{today}</M.Date>
    </div>
  );
}
