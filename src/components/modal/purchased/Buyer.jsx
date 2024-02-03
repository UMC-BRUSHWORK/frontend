import React, { useState } from 'react';
import * as B from './Buyer.Style';
import IMAGES from '../../../assets';

function Buyer() {

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
            <B.Profile src={IMAGES.profile} />
            <B.NameWrapper>
                <B.Name>칼리</B.Name>
                <B.LastChat>마지막 대화 35분 전</B.LastChat>
            </B.NameWrapper>
        </B.Wrapper>
    );
}

export default Buyer;