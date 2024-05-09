import styled from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

export const Background = styled.div`
  /* width: 100%;
  height: 100%;
  background-color: gray; */

  z-index: 1500;
  display: block;
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

export const Wrapper = styled.div`
  z-index: 2000;
  width: 100%;
  height: 14.4rem;
  position: fixed;
  bottom: 0;
  border-radius: 2.4rem 2.4rem 0 0;

  margin: 0 auto;

  background-color: white;
`;

export const Line = styled.div`
  width: 4rem;
  height: 0.2rem;
  background-color: ${() => color.grayscale_be};

  margin-top: 1.2rem;
  position: fixed;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

export const Image = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  padding: 0.5rem;
  border: 0.1rem solid ${() => color.primary_light};
  border-radius: 1.8rem;
`;

export const MenuName = styled.div`
  text-align: center;
  ${() => font.regular_12}
`;
