import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.8rem;
  align-items: center;

  background-color: aliceblue;
`;

export const Profile = styled.img`
  width: 64px;
  height: 64px;
  flex-shrink: 0;

  border-radius: 64px;
  box-shadow: 0px 2px 1.5px 0px rgba(0, 0, 0, 0.15);
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  justify-content: flex-start;
`;

export const Name = styled.div`
  color: #000;

  font-family: Pretendard;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Info = styled.div`
  color: #888;

  font-family: Pretendard;
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
