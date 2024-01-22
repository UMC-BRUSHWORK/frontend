// PurchasedBar.style.js
import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const TabContainer = styled.div`
  display: flex;
  position: relative;
`;

export const TabButton = styled.div`
  ${() => font.medium_17};
  margin-left: 5.8rem;
  margin-right: 3.5rem;
  position: relative;
  cursor: pointer;
  color: ${(props) => (props.active ? '#4812A3' : '#BEBEBE')};
`;

export const TabIndicator = styled.div`
  position: absolute;
  bottom: -0.7rem;
  width: 17.2rem;
  height: 0.2rem;
  margin-top: 0.7rem;
  margin-left: -4.2rem;
  background: ${(props) => (props.active ? '#4812A3' : '#transparent')};
`;

export const TabSeparator = styled.div`
  height: 0.1rem;
  width: 32.8rem;
  background-color: ${color.grayscale_be};
  position: absolute;
  bottom: -0.7rem;
  margin-left: 1.6rem;
  margin-right: 1.6rem;
`;
