import styled, { css, keyframes } from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

const slideUp = keyframes`
  0% {
    opacity: 1;
    transform: translateY(100%);
  }
  100% {
    opacity: 0;
    transform: translateY(0);
  }
`;

export const Wrapper = styled.div`
  width: 90%;
  height: 4.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  position: fixed;
  top: 70%;
  left: 0%;
  transform: translate(-50%, -50%);
  margin: 0 2rem;

  opacity: 0.9;
  border-radius: 4px;

  background-color: ${() => color.grayscale_11};

  ${({ visible }) =>
    visible &&
    css`
      animation: ${slideUp} 3s;
      animation-timing-function: ease-in-out;
      animation-fill-mode: forwards;
    `}
`;

export const Warning = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 2rem;
  margin-right: 0.8rem;
`;

export const Msg = styled.div`
  color: ${() => color.white};
  ${() => font.medium_13}
`;
