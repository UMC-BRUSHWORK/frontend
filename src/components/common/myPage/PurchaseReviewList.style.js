import styled from 'styled-components';

export const ScrollableReviewList = styled.div`
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div`
  overflow-x: auto;
`;
