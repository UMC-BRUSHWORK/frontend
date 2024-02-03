import styled from 'styled-components';
import font from '../../styles/font';
import color from '../../styles/color';

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 25%;
  left: 15%;
  width: 26.4rem;
  height: 30.5rem;
  border-radius: 0.6rem;
  background: ${color.white};
  box-shadow: 0rem 0.1rem 0.15rem 0rem rgba(0, 0, 0, 0.15);
  z-index: 1000;
`;

export const ProfileContainer = styled.div`
  position: relative;
`;

export const ProfileImage = styled.img`
  width: 8.4rem;
  height: 8.4rem;
  border-radius: 8.4rem;
  box-shadow: 0rem 0.2rem 0.15rem 0rem rgba(0, 0, 0, 0.15);
  margin: 4.8rem 9rem 2.4rem;
`;

export const CameraBackground = styled.div`
  width: 1.6rem;
  height: 1.6rem;
  background-color: ${color.white};
  border-radius: 50%;
  position: absolute;
  top: 11.3rem;
  left: 15.5rem;
`;

export const CameraIcon = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  position: absolute;
  top: 11.5rem;
  left: 15.7rem;
`;

export const Nickname = styled.input`
  ${() => font.medium_17}
  &::placeholder {
    color: ${color.black};
  }
  text-align: center;
  border: none;
  width: 100%;
  padding: 0;
`;

export const Separator = styled.div`
  width: 22.4rem;
  height: 0.1rem;
  background-color: ${color.grayscale_be};
  margin: 0 auto;
`;

export const Introduction = styled.input`
  ${() => font.regular_10};
  ::placeholder {
    color: ${color.grayscale_88};
  }
  text-align: center;
  border: none;
  width: 100%;
  margin-top: 1.2rem;
`;

export const ButtonContainer = styled.div`
  margin: 4.8rem auto;
`;

export const CancelButton = styled.button`
  width: 10.8rem;
  height: 2.9rem;
  ${() => font.medium_14};
  color: ${color.black};
  border: none;
  border-radius: 1.45rem;
  background-color: ${color.grayscale_ea};
  cursor: pointer;
  margin-left: 2rem;
`;

export const CompleteButton = styled.button`
  width: 10.8rem;
  height: 2.9rem;
  ${() => font.medium_14};
  color: ${color.white};
  border: none;
  border-radius: 1.45rem;
  background-color: ${color.primary_dark};
  cursor: pointer;
  margin-left: 0.8rem;
`;
