import React from 'react';
import * as T from './Topbar.style';
import ArrowBack from '../../../assets/images/arrow_back.svg';
import Search from '../../../assets/images/search.svg';
import Notif from '../../../assets/images/notif.svg';

function Topbar() {
    return(
        <T.Wrapper>
            <T.Left>
                <T.Icon src={ArrowBack}/>
            </T.Left>
            <T.Right>
                <T.Icon src={Search} style={{ marginRight: '1rem' }}/>
                <T.Icon src={Notif}/>
            </T.Right>
        </T.Wrapper>
    )
}

export default Topbar;