import styled from 'styled-components';

export const MessageWrapper = styled.div`
  display: flex;
  align-items: end;
  justify-content: ${(props) => (props.right ? `flex-end` : `flex-start`)};
`;
export const Time = styled.div`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 400;
  color: var(--Grayscale-88, #888);
  margin: 0.1rem;
`;
export const MessageBox = styled.div`
  max-width: 80%;
  border-radius: 1.4rem;
  padding: 1rem;
  background-color: ${(props) => (props.right ? `#d4c4ed` : `#F5F5F5`)};
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0.4rem 0.2rem 0 0.4rem;
`;
