import styled from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Text = styled.div`
  display: flex;
  flex-direction: row;
  ${() => font.medium_14}
`;

export const Count = styled.div`
  color: ${() => color.primary_normal};
`;
