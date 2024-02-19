import styled, { css } from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';
import IMAGES from '../../assets';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
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
  margin-bottom: 4.3rem;
`;
export const Title = styled.div`
  font-size: 19px;
  font-weight: 500;
  color: ${color.gradation_dark};
  ${() => font.medium_19};
  margin-bottom: 2.4rem;
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.4rem;
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 31.2rem;
  border-top: ${(props) => (props.top ? '1px solid #4812a3' : 'none')};
  border-bottom: ${(props) =>
    props.bottom ? '1px solid #4812a3' : '1px solid #bebebe'};
  padding: 0.5rem 0.8rem;

  ${(props) =>
    props.error &&
    css`
      border-bottom: 1px solid #ea0000;
    `}
`;
export const InputBox = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #888;
  ${() => font.medium_15};
  padding: 0 1rem;
`;
export const ErrorText = styled.div`
  color: #ea0000;
  padding: 0.2rem 0.5rem;
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
  cursor: pointer;
`;
export const Txt = styled.div`
  text-align: center;
  color: #888;
  ${() => font.medium_13};
  text-decoration: underline;
  text-underline-position: under;
`;
