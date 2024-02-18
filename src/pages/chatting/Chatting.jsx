import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import queryString from 'query-string';
import { postChatLog } from '../../apis/chatLog';
import InfoBar from '../../components/chatting/infoBar/InfoBar';
import Messages from '../../components/chatting/messages/Messages';
import ChattingInput from '../../components/chatting/input/ChattingInput';
import * as C from './Chatting.style';

const ENDPOINT = process.env.REACT_APP_BASE_URL;

let socket;

export default function Chatting() {
  const userId = localStorage.getItem('userId');
  const [chattingInfo, setChattingInfo] = useState({});
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatLogData, setChatLogData] = useState([]);
  const [receiverId, setReceiverId] = useState(null);

  useEffect(() => {
    const { roomID } = queryString.parse(window.location.search);

    socket = io(ENDPOINT, {
      withCredentials: false,
    });

    socket.emit('connect-room', { roomId: roomID }, (error) => {
      console.log('hi');
      if (error) {
        alert(error);
      }
    });

    socket.on('connect-info', (info) => {
      const receiver =
        Number(userId) !== info.result.buyerId
          ? info.result.sellerId
          : info.result.buyerId;
      setReceiverId(receiver);
      setChattingInfo(info);
    });
  }, [ENDPOINT, window.location.search]);

  useEffect(() => {
    socket.on('received-message', (msg) => {
      setMessages((prevMessages) => [msg.result, ...prevMessages]);
    });
  }, []);

  useEffect(() => {
    const { roomID } = queryString.parse(window.location.search);

    postChatLog({
      roomId: Number(roomID),
    })
      .then((chatListRes) => {
        setChatLogData(chatListRes.result.chatLogListData);
      })
      .catch((error) => {
        console.error('chat-log 불러오기 오류', error);
      });
  }, []);

  const sendMessage = (event) => {
    const { roomID } = queryString.parse(window.location.search);
    event.preventDefault();

    if (message) {
      console.log(message);
      socket.emit(
        'send-message',
        {
          roomId: Number(roomID),
          senderId: Number(userId),
          receiverId: Number(receiverId),
          content: message,
        },
        () => setMessage(''),
      );
    }
  };
  return (
    <C.OuterContainer>
      <C.Container>
        <InfoBar info={chattingInfo.result || {}} />
        {chattingInfo.result &&
          chattingInfo.result.buyerProfile &&
          chattingInfo.result.sellerProfile && (
            <Messages
              messages={messages}
              log={chatLogData}
              buyerProfile={chattingInfo.result.buyerProfile}
              sellerProfile={chattingInfo.result.sellerProfile}
            />
          )}
        <ChattingInput
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </C.Container>
    </C.OuterContainer>
  );
}
