import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const GoReviewButton = styled.button`
  color: ${(props) => (props.status === 0 ? color.primary_dark : color.black)};
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
