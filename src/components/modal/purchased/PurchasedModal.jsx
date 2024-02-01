import React from 'react';
import * as P from './PurchasedModal.style';
import Buyer from './Buyer';

function PurchasedModal() {
    return(
        <P.Wrapper>
            <P.Title>구매자의 닉네임을 선택해주세요.</P.Title>
            <Buyer />
            <P.Divider />
            <Buyer />
            <P.BtnWrapper>
                <P.CancelBtn>취소</P.CancelBtn>
                <P.CompleteBtn>판매 완료</P.CompleteBtn>
            </P.BtnWrapper>
        </P.Wrapper>
    );
}

export default PurchasedModal;