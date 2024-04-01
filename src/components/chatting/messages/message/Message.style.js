import styled, { css } from 'styled-components';

export const MessageWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: ${(props) => (props.$right ? `flex-end` : `flex-start`)};
`;
export const Read = styled.div`
  font-family: Pretendard;
  font-size: 1rem;
  margin-bottom: 0.1rem;
  opacity: 0;

  ${(props) =>
    props.$visible &&
    css`
      opacity: 1;
    `}
`;

export const Time = styled.div`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  color: var(--Grayscale-88, #888);
  margin: ${(props) =>
    props.$right ? `0 0 0.1rem 0.3rem` : `0 0.3rem 0.1rem 0`};
`;
export const MessageBox = styled.div`
  max-width: 80%;
  border-radius: 1.4rem;
  padding: 1rem;
  background-color: ${(props) => (props.$right ? `#d4c4ed` : `#F5F5F5`)};
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0.4rem 0.2rem 0 0.4rem;
`;

export const ProfileImage = styled.img`
  width: 4rem;
  height: 4rem;
  margin: 0 8px 0 0;
  opacity: 0;

  ${(props) =>
    props.$visible &&
    css`
      opacity: 1;
    `}
`;

export const Date = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  text-align: center;
`;
