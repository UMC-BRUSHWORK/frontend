import styled, { css } from 'styled-components';

export const Scroll = styled.div`
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background: #d2d2d2;
  }
`;
export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.6rem;
  cursor: pointer;
`;
export const ContentWrapper = styled.div`
  display: flex;
`;
export const ProfileImg = styled.img`
  width: 4.8rem;
  height: 4.8rem;
  border-radius: 50%;
  background-color: #f2f2f2;
`;
export const MessageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.6rem;
`;
export const Content = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
`;
export const Name = styled.div`
  font-family: Pretendard;
  font-size: 1.7rem;
  font-weight: 500;
`;
export const Time = styled.div`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  color: #888;
  margin-left: 0.5rem;
`;
export const LastMessage = styled.div`
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 500;
  color: #888;
`;
export const NotReadMsg = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: #ff7a7a;
  border-radius: 50%;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Pretendard;
  font-size: 1.1rem;
  font-weight: 700;
  opacity: 0;

  ${(props) =>
    props.$visible &&
    css`
      opacity: 1;
    `}
`;
