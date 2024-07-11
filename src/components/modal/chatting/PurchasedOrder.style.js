import styled from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

export const Background = styled.div`
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
  width: 90%;
  height: 26.5rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  margin: 0 auto;

  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 1px 1.5px 0px rgba(0, 0, 0, 0.15);
`;

export const Container = styled.div`
  z-index: 2000;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0 10px 0;

  border-radius: 6px;
  background-color: white;
`;

export const Title = styled.div`
  ${font.base_16}
`;

export const Description = styled.div`
  ${font.regular_12}
  color: ${color.grayscale_88};
`;

export const Price = styled.div`
  color: ${color.primary_dark};

  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Text = styled.div`
  color: black;

  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Button = styled.div`
  width: 90%;
  height: 4.4rem;
  border-radius: 6px;

  background: var(
    --Gradation_dark,
    linear-gradient(225deg, #8c4ff2 0%, #4812a3 100%)
  );

  display: flex;
  justify-content: center;
  align-items: center;

  color: white;

  font-family: Pretendard;
  font-size: 17px;
  font-weight: 500;

  cursor: pointer;
`;
