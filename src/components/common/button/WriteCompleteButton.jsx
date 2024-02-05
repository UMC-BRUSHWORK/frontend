import React from 'react';
import * as S from './WriteCompleteButton.style';

function WriteCompleteButton({ type }) {
  console.log(type);
  return (
    <>
      {type === 'WriteOnButton' && <S.WriteOnButton>작성 완료</S.WriteOnButton>}
      {type === 'WriteOffButton' && (
        <S.WriteOffButton>작성 완료</S.WriteOffButton>
      )}
      {type === 'WriteOnMypageButton' && (
        <S.WriteOnMypageButton>작성 완료</S.WriteOnMypageButton>
      )}
    </>
  );
}

export default WriteCompleteButton;
