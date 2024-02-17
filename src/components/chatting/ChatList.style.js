import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1.6rem;
  cursor: pointer;
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
  justify-content: center;
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
