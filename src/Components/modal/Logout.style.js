import styled from 'styled-components';
import font from '../../styles/font';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 29.6rem;
  height: 14.5rem;
  border-radius: 0.6rem;
  box-shadow: 0rem 0.1rem 1.5rem 0rem rgba(0, 0, 0, 0.15);
  padding: 2.4rem;
`;

export const Txt = styled.div`
  margin-top: 1.6rem;
  margin-bottom: 3.6rem;
  ${() => font.medium_17};
`;
export const ButtonWrapper = styled.div`
  width: 18.4rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Button = styled.div`
  width: 8rem;
  height: 2.9rem;
  background: ${(props) => (props.logout ? '#ea0000' : '#eaeaea')};
  color: ${(props) => (props.logout ? '#fff' : '#000')};
  border-radius: 1.45rem;
  display: flex;
  align-items: center;
  justify-content: center;
  ${() => font.medium_14};
`;
