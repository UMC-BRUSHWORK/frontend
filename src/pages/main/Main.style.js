import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';

export const Text = styled.div`
  ${() => font.medium_17}
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.1rem;
  background-color: ${() => color.grayscale_ea};
`;
