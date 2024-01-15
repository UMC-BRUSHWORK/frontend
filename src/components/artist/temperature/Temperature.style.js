import styled from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

export const Wrapper = styled.div``;

export const StatusWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`;

export const PercentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Percent = styled.div`
  ${() => font.regular_12}
`;

export const Img = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;
`;

export const StatusBar = styled.div`
  width: 100%;
  height: 1rem;
  border-radius: 5px;
  background-color: ${() => color.grayscale_ea};
  margin-bottom: 5px;
`;
