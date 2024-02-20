import styled from 'styled-components';
import font from '../../../styles/font';

export const ScrollableReviewList = styled.div`
  display: flex;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Wrapper = styled.div`
  overflow-x: auto;
`;

export const Text = styled.div`
  ${font.medium_14}
`;
