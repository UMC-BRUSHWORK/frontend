import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const ReviewContainer = styled.div`
  display: flex;
`;
export const GoReviewButton = styled.button`
  color: ${color.primary_dark};
  ${() => font.regular_12}
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
`;

export const RightButton = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`;
