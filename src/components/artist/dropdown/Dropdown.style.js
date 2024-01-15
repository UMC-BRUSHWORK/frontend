import styled from 'styled-components';
import font from '../../../styles/font';
import color from '../../../styles/color';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 3rem;

  cursor: pointer;
`;

export const DropDownBtn = styled.div`
  position: absolute;
  right: 0px;

  display: flex;
  flex-direction: row;

  width: 8rem;
  padding: 8px 12px;
  justify-content: center;
  align-items: center;

  ${() => font.regular_10}
`;

export const Menu = styled.div`
  z-index: 1;
  position: absolute;
  top: 3rem;
  right: 0;

  width: 7.9rem;

  border-radius: 0px 0px 5px 5px;
  background: ${() => color.white};
  box-shadow: 0px 1px 1.5px 0px rgba(0, 0, 0, 0.15);

  color: ${() => color.black};
  box-shadow: ${() => color.black};

  visibility: hidden;
  opacity: 0;
  transform: translateY(-10px); /* 위쪽으로 이동하는 값 설정 */
  transition:
    opacity 0.2s ease,
    transform 0.2s ease,
    visibility 0.2s;

  &:after {
    content: '';
    height: 0;
    width: 0;
    position: absolute;
    transform: translate(0, 0);
    border: 12px solid transparent;
  }

  ${({ $isDropped }) =>
    $isDropped &&
    `
      opacity: 1;
      visibility: visible;
      transform: translateY(0); /* 열릴 때는 원래 위치로 이동 */
    `};
`;

export const Ul = styled.div`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const Li = styled.div`
  padding: 6px 16px;

  color: ${() => color.black};

  &:hover {
    font-weight: 600;
  }
`;
