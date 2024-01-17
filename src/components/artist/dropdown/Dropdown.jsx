import React, { useState } from 'react';
import IMAGES from '../../../assets';
import * as S from './Dropdown.style';
import useDetectClose from './useDetectClose';

export default function Dropdown() {
  const [myPageIsOpen, myPageRef, myPageHandler] = useDetectClose(false);
  const [selected, setSelected] = useState('전체 보기');

  const handleAllClick = () => {
    setSelected('전체 보기');
  };

  const handleSaleClick = () => {
    setSelected('판매중');
  };

  const handleSoldOutClick = () => {
    setSelected('판매 완료');
  };

  return (
    <S.Container>
      <S.DropDownBtn
        onClick={myPageHandler}
        ref={myPageRef}
        $isDropped={myPageIsOpen}
      >
        <p>{selected}</p>
        <img src={IMAGES.arrowDropDown} alt="arrow" />
      </S.DropDownBtn>
      <S.Menu $isDropped={myPageIsOpen}>
        <S.Ul>
          <S.Li onClick={handleAllClick}>
            <p id="name">전체 보기</p>
          </S.Li>
          <S.Li onClick={handleSaleClick}>
            <p id="newest">판매중</p>
          </S.Li>
          <S.Li onClick={handleSoldOutClick}>
            <p id="newest">판매 완료</p>
          </S.Li>
        </S.Ul>
      </S.Menu>
    </S.Container>
  );
}
