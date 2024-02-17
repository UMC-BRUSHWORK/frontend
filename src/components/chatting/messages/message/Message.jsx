import React from 'react';
import ReactEmoji from 'react-emoji';
import { dateFormat } from '../../../../utils/dateFormatter';
import * as M from './Message.style';

export default function Message({ message }) {
  const userId = localStorage.getItem('userId');

  let formattedTime;
  if (message) {
    formattedTime = dateFormat(message.date);
  }

  let isSentByCurrentUser = false;

  if (message.senderId === Number(userId)) {
    isSentByCurrentUser = true;
  }

  return (
    <div>
      {isSentByCurrentUser ? (
        <M.MessageWrapper right>
          <M.Time>{formattedTime}</M.Time>
          <M.MessageBox right>
            {ReactEmoji.emojify(message.message)}
          </M.MessageBox>
        </M.MessageWrapper>
      ) : (
        <M.MessageWrapper>
          <M.MessageBox>{ReactEmoji.emojify(message.message)}</M.MessageBox>
          <M.Time>{formattedTime}</M.Time>
        </M.MessageWrapper>
      )}
    </div>
  );
}
