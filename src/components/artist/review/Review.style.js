import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;

  width: 100%;
  padding: 13px 12px;

  border-radius: 6px;
  border: 1px solid var(--Grayscale-BE, #bebebe);
  background: #fff;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export const SmallText = styled.div`
  ${() => font.regular_10}
  color: ${() => color.grayscale_88};
`;

export const NormalText = styled.div`
  ${() => font.regular_12}
`;
