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
  position: relative;
  width: 100%;

  margin-top: 3.5rem;
  padding-bottom: 5px;
`;

export const ArrowWrapper = styled.div`
  position: absolute;
  top: -30px;
  left: ${(props) => props.percent};
  transform: translate(-50%, 0);
`;

export const Percent = styled.div`
  ${() => font.regular_12}
  color: ${() => color.grayscale_88};
`;

export const Arrow = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  flex-shrink: 0;

  position: absolute;
  top: 10px;
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
`;

export const Gage = styled.div`
  width: ${(props) => props.percent};
  height: 1rem;
  border-radius: 5px;

  position: absolute;
  z-index: 1;
  bottom: 5px;

  background-color: ${() => color.primary_normal};
`;
