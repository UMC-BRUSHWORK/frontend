import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 6rem;
  box-shadow: 0px -2px 4px rgba(0, 0, 0, 0.1);
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
`;
export const MenuTxt = styled.div`
  margin-top: 0.2rem;
  text-align: center;
`;
