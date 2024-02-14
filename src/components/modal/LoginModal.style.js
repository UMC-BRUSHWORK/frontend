import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: #00000080;
  backdrop-filter: blur(3px);
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.8rem;
  height: 15.2rem;
  border-radius: 0.6rem;
  box-shadow: 0rem 0.1rem 1.5rem 0rem rgba(0, 0, 0, 0.15);
  background-color: #fff;
`;
export const MainTxt = styled.div`
  color: ${color.primary_dark};
  ${() => font.medium_15}
`;
export const SubTxt = styled.div`
  color: #888;
  font-family: Pretendard, sans-serif;
  font-size: 12px;
  font-weight: 400;
  margin-top: 0.8rem;
  margin-bottom: 2.8rem;
`;
export const ButtonWrapper = styled.div`
  width: 27rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Button = styled.div`
  height: 2.9rem;
  ${() => font.medium_14};
  padding: 0.5rem 2.3rem;
  border-radius: 1.45rem;
  background: ${(props) =>
    props.login
      ? 'linear-gradient(225deg, #8C4FF2 0%, #4812A3 100%)'
      : '#eaeaea'};
  color: ${(props) => (props.login ? '#fff' : '#000')};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
