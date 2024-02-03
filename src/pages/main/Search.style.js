import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Text = styled.div`
  ${() => font.medium_14}
`;

export const Line = styled.div`
  width: 100%;
  height: 0;
  background-color: ${() => color.grayscale_d8};
`;
