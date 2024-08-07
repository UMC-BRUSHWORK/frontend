import React from 'react';
import ReactEmoji from 'react-emoji';
import * as M from './Message.style';

export default function Message({
  message,
  time,
  today,
  profile,
  buyerProfile,
  sellerProfile,
  isRead,
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
            {ReactEmoji.emojify(message.message)}
          </M.MessageBox>
        </M.MessageWrapper>
      ) : (
        <M.MessageWrapper>
          <M.ProfileImage $visible={profile} src={imgSrc} />
          <M.MessageBox>{ReactEmoji.emojify(message.message)}</M.MessageBox>
          <M.Time>{time}</M.Time>
          <M.Read $visible={!read}>1</M.Read>
        </M.MessageWrapper>
      )}
      <M.Date>{today}</M.Date>
    </div>
  );
}
