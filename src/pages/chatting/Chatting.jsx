/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import { useInView } from 'react-intersection-observer';
import queryString from 'query-string';
import { postChatLog } from '../../apis/chatLog';
import InfoBar from '../../components/chatting/infoBar/InfoBar';
import Messages from '../../components/chatting/messages/Messages';
import ChattingInput from '../../components/chatting/input/ChattingInput';
import * as C from './Chatting.style';
import ProductBar from '../../components/chatting/infoBar/ProductBar';

const ENDPOINT = process.env.REACT_APP_BASE_URL;

let socket;

export default function Chatting() {
  const userId = localStorage.getItem('userId');
  const [chattingInfo, setChattingInfo] = useState({});
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [chatLogData, setChatLogData] = useState([]);
  const [receiverId, setReceiverId] = useState(null);
  const [page, setPage] = useState(25);
  // const [readRes, setReadRes] = useState('');

  const [ref, inView] = useInView();

  // 채팅방 입장
  useEffect(() => {
    const { roomID } = queryString.parse(window.location.search);

    socket = io(ENDPOINT, {
      withCredentials: false,
    });

    socket.emit('connect-room', { roomId: roomID }, (error) => {
      if (error) {
        alert(error);
      }
    });

    socket.on('connect-info', (info) => {
      const receiver =
        Number(userId) === info.result.buyerId
          ? info.result.sellerId
          : info.result.buyerId;
      setReceiverId(receiver);
      setChattingInfo(info);
    });
  }, [ENDPOINT, window.location.search]);
  console.log(chattingInfo);

  useEffect(() => {
    const { roomID } = queryString.parse(window.location.search);

    socket.emit(
      'read-message',
      {
        roomId: Number(roomID),
        userId: Number(userId),
      },
      (error) => {
        if (error) {
          alert(error);
        }
      },
    );
  }, [receiverId]);

  // 메세지 받기
  useEffect(() => {
    socket.on('received-message', (msg) => {
      setMessages((prevMessages) => [msg.result, ...prevMessages]);
    });
  }, []);

  // 메세지 읽기
  // useEffect(() => {
  //   socket.on('read-message', (res) => {
  //     setReadRes(res);
  //   });
  // }, []);
  // console.log(readRes);

  // 채팅 전송
  const sendMessage = (event) => {
    const { roomID } = queryString.parse(window.location.search);
    event.preventDefault();
    if (message) {
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

  // 채팅 기록 불러오기
  const loadChatLog = async () => {
    const { roomID } = queryString.parse(window.location.search);

    postChatLog({
      roomId: Number(roomID),
      paging: page,
    })
      .then((chatListRes) => {
        setChatLogData(chatListRes.result.chatLogListData);
        setPage((p) => p + 5);
      })
      .catch((error) => {
        console.error('chat-log 불러오기 오류', error);
      });
  };

  useEffect(() => {
    loadChatLog();
  }, [inView]);

  return (
    <C.OuterContainer>
      <C.Container>
        <InfoBar info={chattingInfo.result || {}} />
        <ProductBar info={chattingInfo.result || {}} />
        {chattingInfo.result &&
          chattingInfo.result.buyerId &&
          chattingInfo.result.sellerId && (
            <Messages
              messages={messages}
              log={chatLogData}
              buyerProfile={chattingInfo.result.buyerProfile}
              sellerProfile={chattingInfo.result.sellerProfile}
            >
              <div ref={ref} style={{ width: '1px' }} />
            </Messages>
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
