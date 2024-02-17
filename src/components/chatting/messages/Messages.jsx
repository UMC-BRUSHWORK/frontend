/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import BasicScrollToBottom from 'react-scroll-to-bottom';
import Message from './message/Message';

const ScrollToBottom = styled(BasicScrollToBottom)`
  overflow: auto;
  flex: auto;
`;
const Wrapper = styled.div`
  padding: 1rem;
`;

export default function Messages({ messages, log }) {
  console.log(messages);
  const allData = [...messages.filter((_, index) => index % 2 === 0), ...log];
  console.log(allData);

  return (
    <ScrollToBottom>
      <Wrapper>
        {allData.reverse().map((data, index) => (
          <div key={index}>{data.message && <Message message={data} />}</div>
        ))}
      </Wrapper>
    </ScrollToBottom>
  );
}
