import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const Wrapper = styled.div`
  width: 32.8rem;
  height: 26.7rem;
  flex-shrink: 0;
  border-radius: 0.6rem;
  background: #fff;
  box-shadow: 0px 1px 1.5px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  z-index: 999;
`;

export const Title = styled.div`
  ${() => font.regular_10}
  color: ${color.grayscale_88};
  text-align: center;
  margin: 1.6rem 0;
`;

export const BtnWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 1.2rem;
  margin-top: 1.4rem;
`;
export const CancelBtn = styled.div`
  width: 13.4rem;
  height: 2.9rem;
  flex-shrink: 0;
  border-radius: 1.45rem;
  ${() => font.medium_14}
  background-color: ${color.grayscale_ea};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CompleteBtn = styled.div`
  width: 13.4rem;
  height: 2.9rem;
  flex-shrink: 0;
  border-radius: 1.45rem;
  ${() => font.medium_14}
  color: white;
  background-color: ${color.primary_dark};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Report = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;
export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;
export const ModalContent = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
`;
