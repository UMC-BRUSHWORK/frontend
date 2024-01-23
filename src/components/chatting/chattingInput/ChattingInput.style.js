import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 3.6rem;
  padding: 1rem 0.5rem 1rem 4.4rem;

  position: relative;

  border: none;
  border-radius: 20px;
  background: var(--Grayscale-F5, #f5f5f5);
  outline: none;
`;

export const Send = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const Add = styled.img`
  position: absolute;
  left: 8px;
`;
