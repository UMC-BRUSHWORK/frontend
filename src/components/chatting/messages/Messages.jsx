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

export default function Messages({ messages, log, children }) {
  const allData = [...messages.filter((_, index) => index % 2 === 0), ...log];

  return (
    <ScrollToBottom>
      {children}
      <Wrapper>
        {allData.reverse().map((data, index) => (
          <div key={index}>{data.message && <Message message={data} />}</div>
        ))}
      </Wrapper>
    </ScrollToBottom>
  );
}
