import React, { useState } from 'react';
import * as B from './Buyer.Style';

function Buyer({ data, onBuyerSelect }) {
    const [selectedBuyer, setSelectedBuyer] = useState(null);

    const handleRadioChange = (consumerId) => {
        setSelectedBuyer(consumerId);
        onBuyerSelect(consumerId); // 선택된 buyerId를 상위 컴포넌트로 전달
        console.log(consumerId);
    };

    function formatLastChatTime(lastChatTime) {
        const currentTime = new Date();
        const chatTime = new Date(lastChatTime);
    
        const timeDifference = currentTime - chatTime;
        const secondsDifference = Math.floor(timeDifference / 1000);
        const minutesDifference = Math.floor(secondsDifference / 60);
        const hoursDifference = Math.floor(minutesDifference / 60);
        const daysDifference = Math.floor(hoursDifference / 24);
    
        if (daysDifference >= 1) {
            return `${daysDifference}일 전`;
        } 

        if (hoursDifference >= 1) {
            return `${hoursDifference}시간 전`;
        } 
        return '방금 전';
    };
    const formattedTime = formatLastChatTime(data.latestMsgDate);


    return(
        <B.Wrapper>
            <B.RadioBtn 
                type="radio"
                checked={selectedBuyer === data.buyerId}
                onChange={() => handleRadioChange(data.buyerId)}
                name="radioGroup"
                />
            <B.Profile src={data.buyerProfile} />
            <B.NameWrapper>
                <B.Name>{data.buyerNickname}</B.Name>
                <B.LastChat>마지막 대화 {formattedTime}</B.LastChat>
            </B.NameWrapper>
        </B.Wrapper>
    );
}

export default Buyer;