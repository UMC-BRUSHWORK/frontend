import React, { useState } from 'react';
import * as B from './Buyer.Style';

function Buyer({ data }) {

    const [selectedBuyer, setSelectedBuyer] = useState(null);

    const handleRadioChange = (buyerId) => {
        setSelectedBuyer(buyerId);
    };

    return(
        <B.Wrapper>
            <B.RadioBtn 
                type="radio"
                value="buyer1"
                checked={selectedBuyer === 'buyer1'}
                onChange={() => handleRadioChange('buyer1')}
                />
            <B.Profile src={data.buyerProfile} />
            <B.NameWrapper>
                <B.Name>{data.buyerNickname}</B.Name>
                <B.LastChat>마지막 대화 {data.latestMsgDate}</B.LastChat>
            </B.NameWrapper>
        </B.Wrapper>
    );
}

export default Buyer;