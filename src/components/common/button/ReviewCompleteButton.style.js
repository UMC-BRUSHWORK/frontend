import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const ReviewContainer = styled.div`
  display: flex;
`;
export const GoMyReviewButton = styled.button`
  color: ${color.black};
  ${() => font.regular_12}
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

export const RightButton = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`;
