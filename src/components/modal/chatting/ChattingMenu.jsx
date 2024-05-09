import React from 'react';
import * as S from './ChattingMenu.style';
import IMAGES from '../../../assets';

export default function ChattingMenu({ modalRef, modalOutSideClick }) {
  return (
    <>
      <S.Background ref={modalRef} onClick={(e) => modalOutSideClick(e)} />
      <S.Wrapper>
        <S.Container>
          <S.Line />
          <S.MenuWrapper>
            <S.Image src={IMAGES.bill} alt="bill" />
            <S.MenuName>주문서</S.MenuName>
          </S.MenuWrapper>
          <S.MenuWrapper>
            <S.Image src={IMAGES.gallery} alt="gallery" />
            <S.MenuName>사진</S.MenuName>
          </S.MenuWrapper>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
