import styled from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

export const MenuContainer = styled.div`
  margin-bottom: 2.4rem;
`;

export const Line = styled.div`
  width: 32.8rem;
  height: 0.1rem;
  background-color: ${color.grayscale_11};
`;

export const GrayLine = styled.div`
  width: 32.8rem;
  height: 0.1rem;
  background-color: ${color.grayscale_be};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  margin: 1.2em auto 1.2em;
`;

export const GoPageButton = styled.button`
  color: ${color.black};
  ${() => font.medium_14};
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
`;

export const ImgButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
  margin-right: 0.8rem;
`;
