import React from 'react';
import * as S from './WriteCompleteButton.style';

function WriteCompleteButton({ state }) {
  return (
    <div>
      {state ? (
        <S.WriteOnButton>작성 완료</S.WriteOnButton>
      ) : (
        <S.WriteOffButton>작성 완료</S.WriteOffButton>
      )}
    </div>
  );
}

export default WriteCompleteButton;
