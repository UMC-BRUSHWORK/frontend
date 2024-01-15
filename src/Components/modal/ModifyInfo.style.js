import styled from 'styled-components';
import font from '../../styles/font';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 26.4rem;
  height: 30.5rem;
  border-radius: 0.6rem;
  box-shadow: 0rem 0.1rem 1.5rem 0rem rgba(0, 0, 0, 0.15);
  padding: 1.6rem;
`;
export const InputBox = styled.input`
  width: 22.4rem;
  border: none;
  border-bottom: 0.1rem solid #bebebe;
  ${() => font.medium_13};
  outline: none;
  vertical-align: bottom;
  margin-top: 1.9rem;
  padding-bottom: 0.3rem;
`;
export const ButtonWrapper = styled.div`
  width: 22.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3.8rem;
`;
export const Button = styled.div`
  width: 10.8rem;
  height: 2.9rem;
  border-radius: 1.45rem;
  background: ${(props) => (props.complete ? '#4812a3' : '#eaeaea')};
  color: ${(props) => (props.complete ? '#fff' : '#000')};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  ${() => font.medium_14};
`;
