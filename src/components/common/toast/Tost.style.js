import styled from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

export const Wrapper = styled.div`
  width: 100%;
  height: 4.7rem;
  display: flex;
  flex-direction: row;
  align-items: center;

  position: absolute;
  bottom: 36px;
  margin: 0 2rem;

  opacity: 0.9;
  border-radius: 4px;

  background-color: ${() => color.grayscale_11};
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
