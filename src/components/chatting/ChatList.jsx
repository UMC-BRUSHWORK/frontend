/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { postChatList } from '../../apis/chatList';
import { dateFormat } from '../../utils/dateFormatter';
import * as C from './ChatList.style';

export default function ChatList() {
  const userId = localStorage.getItem('userId');
  const navigate = useNavigate();

  const [chatListData, setChatListData] = useState([]);
  const [page, setPage] = useState(25);
  const [ref, inView] = useInView();

  const loadChatList = async () => {
    postChatList({
      userId,
      paging: page,
    })
      .then((chatListRes) => {
        setChatListData(chatListRes.result.chatListData);
        setPage((p) => p + 5);
      })
      .catch((error) => {
        console.error('ChatList 불러오기 오류', error);
      });
  };

  useEffect(() => {
    loadChatList();
  }, [inView]);

  const joinChat = (roomId) => {
    navigate(`/chatting-list/chatting?roomID=${roomId}`);
  };

  return (
    <>
      {chatListData.map((data, index) => (
        <C.Wrapper key={index} onClick={() => joinChat(data.roomId)}>
          <C.ProfileImg
            src={
              Number(userId) === data.buyerId
                ? data.sellerProfile
                : data.buyerProfile
            }
          />
          <C.MessageWrapper>
            <C.Content>
              <C.Name>
                {Number(userId) === data.buyerId
                  ? data.sellerNickname
                  : data.buyerNickname}
              </C.Name>
              <C.Time>{dateFormat(data.latestMsgDate)}</C.Time>
            </C.Content>
            <C.LastMessage>{data.latestMsg}</C.LastMessage>
          </C.MessageWrapper>
        </C.Wrapper>
      ))}
      <div ref={ref} style={{ width: '1px' }} />
    </>
  );
}
