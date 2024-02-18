import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as P from './PurchasedModal.style';
import Buyer from './Buyer';
import { getChatBuyerList } from '../../../apis/getChatBuyerList';

function PurchasedModal({ onClose }) {
    const [buyerList, setBuyerList] = useState([]);

    let { productId } = useParams();
    productId = parseInt(productId, 10);

    const getChatBuyers = async () => {
        try {
            const res = await getChatBuyerList({ productId });
            setBuyerList(res.result.productChatList);
        } catch (error){
            console.log(error);
        }
    };

    useEffect(() => {
        getChatBuyers({ productId });
    });

    return(
        <P.ModalBackground>
        <P.Wrapper>
            <P.Title>구매자의 닉네임을 선택해주세요.</P.Title>
            {buyerList.map(data => (
                <>
                    <Buyer data={data}/>
                    <P.Divider />
                </>
            ))}
            <P.BtnWrapper>
                <P.CancelBtn onClick={onClose}>취소</P.CancelBtn>
                <P.CompleteBtn >판매 완료</P.CompleteBtn>
            </P.BtnWrapper>
        </P.Wrapper>
        </P.ModalBackground>
    );
}

export default PurchasedModal;