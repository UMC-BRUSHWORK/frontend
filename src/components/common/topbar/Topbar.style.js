import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const Wrapper = styled.div`
  width: 100%;
  height: 5.2rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  z-index: 11;
  top: 0;
  background-color: ${color.white};
`;

export const PurchasedWrapper = styled.div`
  width: 100%;
  height: 5.2rem;
  padding-left: 2rem;
  padding-right: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
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

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 1.3rem;

  outline: none;
  border: none;
  ${() => font.title}
`;
