import React from 'react';
import ChattingInput from '../../components/chatting/chattingInput/ChattingInput';
import ReceiveBox from '../../components/chatting/receiveBox/ReceiveBox';
import SendBox from '../../components/chatting/sendBox/SendBox';

export default function Chatting() {
  return (
    <div>
      <ReceiveBox />
      <SendBox />
      <ChattingInput />
    </div>
  );
}
