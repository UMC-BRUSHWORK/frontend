import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const WriteOffButton = styled.button`
  width: 36rem;
  height: 6rem;
  background-color: ${color.primary_light};
  color: ${color.white};
  ${() => font.medium_17}
  border: none;
  cursor: pointer;
`;

export const WriteOnButton = styled.button`
  width: 36rem;
  height: 6rem;
  background-color: ${color.primary_dark};
  color: ${color.white};
  ${() => font.medium_17}
  border: none;
  cursor: pointer;
`;

export const WriteOnMypageButton = styled.button`
  width: 36rem;
  height: 6rem;
  background-image: ${color.gradation_dark};
  color: ${color.white};
  ${() => font.medium_17}
  border: none;
  cursor: pointer;
`;
