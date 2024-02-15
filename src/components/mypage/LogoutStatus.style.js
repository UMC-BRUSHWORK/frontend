import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';
import IMAGES from '../../assets';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.div`
  background-image: url(${IMAGES.brushworkLogo});
  background-position: center;
  background-size: cover;
  width: 18rem;
  height: 5.6rem;
  margin-bottom: 0.4rem;
`;
export const Txt = styled.div`
  text-align: center;
  color: ${color.grayscale_88};
  ${() => font.regular_12};
  margin-bottom: 2.8rem;
`;
export const Button = styled.button`
  width: 31.2rem;
  height: 4.4rem;
  border: none;
  border-radius: 6px;
  background: ${color.gradation_dark};
  color: ${color.white};
  ${() => font.medium_17};
  margin-bottom: 1.6rem;
`;
