import React, { useState } from 'react';
import * as R from './Reason.style';
import data from '../../../constants/reportDummy';

function Reason({ onSelectReason }) {
  const [selectedReason, setSelectedReason] = useState(null);

  const handleReasonChange = (reason) => {
    setSelectedReason(reason);
    onSelectReason(reason);
  };

  return (
    <>
      {data.map((item) => (
        <R.Wrapper key={item.id}>
          <R.RadioBtn
            type="radio"
            checked={selectedReason === item.content}
            onChange={() => handleReasonChange(item.content)}
          />
          <R.Text>{item.content}</R.Text>
        </R.Wrapper>
      ))}
    </>
  );
}

export default Reason;
