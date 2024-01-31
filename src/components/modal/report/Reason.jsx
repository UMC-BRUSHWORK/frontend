import React from 'react';
import * as R from './Reason.style';
import data from '../../../constants/reportDummy';

function Reason() {

    return(
        <>
        {data.map((item) => (
        <R.Wrapper>
              <R.RadioBtn 
                type="radio"/>
              <R.Text key={item.id}>
                {item.content}
              </R.Text>
        </R.Wrapper>
        ))}
        </>
    );
}

export default Reason;