import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 5.2rem;
  padding: 1.2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 3.6rem;
  border-radius: 2rem;
  background: var(--Grayscale-F5, #f5f5f5);
  padding-left: 0.8rem;
  margin-right: 1.2rem;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 100%;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  outline: none;
  margin: 0.5rem;
`;
