import styled from 'styled-components';
import LogoImage from '../../../assets/images/Logo.png';

export const Wrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  height: 5.2rem;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;
export const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const Logo = styled.div`
  width: 11.1rem;
  height: 3.4rem;
  background-image: url(${LogoImage});
  background-size: contain;
  background-repeat: no-repeat;
  margin-left: 1.6rem;
`;
export const IconWrapper = styled.div`
  display: flex;
  margin-right: 1rem;
`;
export const Icon = styled.div`
  margin: 0 1rem;
`;
