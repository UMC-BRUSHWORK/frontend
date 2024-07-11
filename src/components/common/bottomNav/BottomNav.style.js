import styled from 'styled-components';
import color from '../../../styles/color';

export const Wrapper = styled.div`
  z-index: 11;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);

  width: 100%;
  height: 6rem;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${color.white};
`;
export const MenuList = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  cursor: pointer;
`;
export const MenuTxt = styled.div`
  margin-top: 0.2rem;
  text-align: center;
`;
