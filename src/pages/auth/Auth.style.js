import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';
import LogoImg from '../../assets/images/Logo.png';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.div`
  background-image: url(${LogoImg});
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
  border-top: ${(props) => (props.hasborders ? '1px solid #4812a3' : 'none')};
  border-bottom: ${(props) =>
    props.hasborders ? '1px solid #4812a3' : 'none'};
`;
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 31.2rem;
  border-bottom: 1px solid #bebebe;
  padding: 0.5rem 0.8rem;
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
`;
export const Button = styled.button`
  width: 31.2rem;
  height: 4.4rem;
  border: none;
  border-radius: 6px;
  background: ${color.gradation_dark};
  color: ${color.white};
  ${() => font.medium_17};
`;
export const Txt = styled.div`
  text-align: center;
  color: #888;
  ${() => font.medium_13};
  text-decoration: underline;
  text-underline-position: under;
  margin-top: 1.6rem;
`;
