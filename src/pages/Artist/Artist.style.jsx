import styled from 'styled-components';
import color from '../../styles/color';
import font from '../../styles/font';

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

export const Button = styled.button`
  border: none;
  background: none;
  color: ${(props) => (props.selected ? color.primary_dark : color.grey)};
  ${() => font.medium_17}

  border-bottom: ${(props) => (props.selected ? ' 0.2rem' : '0.1rem')} solid
    ${(props) => (props.selected ? color.primary_dark : color.grey)};
  ${() => font.medium_17};
  width: 50%;
`;
