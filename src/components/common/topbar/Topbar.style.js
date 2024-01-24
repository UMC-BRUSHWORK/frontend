import styled from 'styled-components';
import font from '../../../styles/font';

export const Wrapper = styled.div`
  width: 100%;
  height: 5.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div`
  display: flex;
`;

export const LogoText = styled.div`
  ${() => font.medium_19};
  margin-left: 1.2rem;
`;

export const Right = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
`;
