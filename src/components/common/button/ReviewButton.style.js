import styled from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

export const ReviewContainer = styled.div`
  display: flex;
  margin-left: 1.6rem;
`;

export const ReviewWrapper = styled.div`
  ${() => font.medium_13};
  margin-left: 1.6rem;
`;

export const ReviewTextButton = styled.button`
  display: flex;
  height: 2.9rem;
  padding: 0.5rem 1.2rem 0.3rem 1.2rem;
  margin-right: 0.6rem;
  margin-top: 1.2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border: none;
  border-radius: 1.45rem;
  ${() => font.medium_14}
  color: ${(props) => (props.selected ? color.white : color.black)};
  background-color: ${(props) =>
    props.selected ? color.primary_dark : color.grayscale_f5};
`;
