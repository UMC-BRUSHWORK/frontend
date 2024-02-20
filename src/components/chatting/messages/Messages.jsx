/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import BasicScrollToBottom from 'react-scroll-to-bottom';
import Message from './message/Message';
import { dateFormat } from '../../../utils/dateFormatter';

const ScrollToBottom = styled(BasicScrollToBottom)`
  overflow-y: auto;
  flex: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const Wrapper = styled.div`
  padding: 1rem;
`;

export default function Messages({
  messages,
  log,
  buyerProfile,
  sellerProfile,
  children,
}) {
  console.log(messages);
  const allData = [...messages, ...log];
  console.log(allData);
  return (
    <ScrollToBottom>
      {children}
      <Wrapper>
        {allData.reverse().map((data, index) => {
          let timeValue = dateFormat(data.date);
          let displayDate = false;
          let today = null;
          let displayProfile = false;
          const isDate = new Date(data.date);

          if (index !== allData.length - 1) {
            const nextSender = allData[index + 1].senderId;
            const nextDate = new Date(allData[index + 1].date);

            if (
              isDate.getFullYear() !== nextDate.getFullYear() ||
              isDate.getMonth() !== nextDate.getMonth() ||
              isDate.getDate() !== nextDate.getDate()
            ) {
              displayDate = true;
              let day = '';
              switch (nextDate.getDay()) {
                case 0:
                  day = '일';
                  break;
                case 1:
                  day = '월';
                  break;
                case 2:
                  day = '화';
                  break;
                case 3:
                  day = '수';
                  break;
                case 4:
                  day = '목';
                  break;
                case 5:
                  day = '금';
                  break;
                case 6:
                  day = '토';
                  break;
                default:
                  break;
              }
              today = `${nextDate.getFullYear()}년 ${nextDate.getMonth() + 1}월 ${nextDate.getDate()}일 ${day}요일`;
            }
            if (!displayDate) today = null;

            if (index !== 0) {
              const prevSender = allData[index - 1].senderId;
              const prevDate = new Date(allData[index - 1].date);
              prevDate.setHours(prevDate.getHours() - 9);

              if (
                prevSender !== data.senderId ||
                prevDate.getDate() !== isDate.getDate()
              )
                displayProfile = true;
            } else displayProfile = true;

            const nextTimeValue = dateFormat(allData[index + 1].date);
            if (nextSender === data.senderId) {
              if (nextTimeValue === timeValue) timeValue = null;
            }
          }
          return (
            <div key={index}>
              {data.message && (
                <Message
                  message={data}
                  time={timeValue}
                  today={today}
                  buyerProfile={buyerProfile}
                  sellerProfile={sellerProfile}
                  profile={displayProfile}
                  isRead={data.isRead}
                />
              )}
            </div>
          );
        })}
      </Wrapper>
    </ScrollToBottom>
  );
}
