import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const DescriptionWrapper = styled.div`
  ${() => font.medium_13};
`;

export const DescriptionInput = styled.textarea`
  ${() => font.medium_15};
  color: ${color.black};
  width: 32.8rem;
  height: 12.5rem;
  border-radius: 0.6rem;
  border: 1px solid ${color.grayscale_be};
  margin-top: 1.2rem;
  padding: 1.6rem;
  resize: none;
  outline: none;
  &::placeholder {
    color: ${color.grayscale_be};
    margin: 1.6rem 0;
  }
`;
