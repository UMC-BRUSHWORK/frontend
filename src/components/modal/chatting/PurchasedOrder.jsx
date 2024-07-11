import React from 'react';
import * as S from './PurchasedOrder.style';

export default function PurchasedOrder({
  modalRef,
  modalOutSideClick,
  setBillModalShow,
  sendMessage,
}) {
  const handleClickButton = (e) => {
    setBillModalShow(false);
    console.log('clicked');
    sendMessage(e);
  };
  return (
    <>
      <S.Background ref={modalRef} onClick={(e) => modalOutSideClick(e)} />
      <S.Wrapper>
        <S.Container>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
              justifyItems: 'center',
              alignItems: 'center',
            }}
          >
            <S.Title>주문서 발송</S.Title>
            <S.Description>아래 금액으로 결제를 요청합니다</S.Description>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row' }}>
            <S.Price>100,000</S.Price>
            <S.Text>원</S.Text>
          </div>
          <S.Button onClick={(e) => handleClickButton(e)}>
            결제 요청하기
          </S.Button>
        </S.Container>
      </S.Wrapper>
    </>
  );
}
