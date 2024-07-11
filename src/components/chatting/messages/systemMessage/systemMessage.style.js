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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* max-width: 80%; */
  width: 214px;
  border-radius: 1.4rem;
  padding: 1rem;
  background-color: #fff4d8;

  text-align: center;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 28px;
  margin: 0.4rem 0.2rem 0 0.4rem;
  padding: 18px 11px 11px 11px;
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

export const Button = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 192px;
  height: 38px;

  margin-top: 11px;
  cursor: pointer;

  flex-shrink: 0;
  border-radius: 6px;
  background: var(--Grayscale-White, #fff);
  box-shadow: 0px 2px 2px 0px rgba(249, 188, 29, 0.25);
  color: #000;
  text-align: center;

  /* 작품 제목_Medium_13 */
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
