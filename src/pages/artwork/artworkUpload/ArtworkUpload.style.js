/* eslint-disable no-nested-ternary */
import styled from 'styled-components';
import color from '../../../styles/color';
import font from '../../../styles/font';

export const Wrapper = styled.div`
  margin: 2rem;
  margin-bottom: 6rem;
`;

export const UploadWrapper = styled.div`
  position: relative;

  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
`;

export const Image = styled.input`
  width: 12rem;
  height: 12rem;
  flex-shrink: 0;
  border-radius: 0.4rem;
  border: 0.1rem solid var(--Grayscale-BE, #bebebe);
  background: #fff;
`;

export const UploadImage = styled.img`
  width: 12rem;
  height: 12rem;
  flex-shrink: 0;
  border-radius: 0.4rem;
  background: #fff;
  object-fit: contain;
`;

export const Photo = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 6rem;
`;

export const SectionTitle = styled.div`
  color: ${(props) => (props.isError ? color.error : color.black)};
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin: 2rem 0 1rem 0;
`;

export const InputText = styled.input`
  color: var(--Grayscale-33, #333);
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  text-align: left;
  border: none;
  -moz-appearance: textfield;
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: var(--Grayscale-BE, #bebebe);
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0em;
  }
  outline: none;
`;

export const Description = styled.textarea`
  border: 1px solid var(--Grayscale-BE, #bebebe);
  border-radius: 0.6rem;
  width: 100%;
  height: 13rem;
  color: var(--Grayscale-33, #333);
  text-align: justify;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 1rem;
  &::placeholder {
    color: #bebebe;
  }
  outline-color: var(--Primary_normal, #8c4ff2);
  outline-width: 0.1rem;
`;

export const BottomLine = styled.div`
  width: 100%;
  height: 0.1rem;
  margin: 0.5rem 0 2rem 0;
  background: ${(props) =>
    props.isError
      ? color.error
      : props.active
        ? color.grayscale_33
        : color.grayscale_be};
`;

export const WriteCompleteBtn = styled.div`
  display: flex;
  width: 100%;
  height: 6rem;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  ${() => font.medium_17}
  color: ${color.white};
  background-color: ${(props) =>
    props.status ? color.primary_dark : color.primary_light};
`;
