import React from 'react';
import * as R from './ReviewDetete.style';

export default function ReviewDelete({ onClose }) {
  const handleCancelClick = () => {
    onClose();
  };

  const handleDeleteClick = () => {
    onClose();
  };
  return (
    <>
      <R.ModalBackground />
      <R.Wrapper>
        <R.Txt>후기를 삭제하시겠습니까?</R.Txt>
        <R.ButtonWrapper>
          <R.CancelButton onClick={handleCancelClick}>취소</R.CancelButton>
          <R.DeleteButton onClick={handleDeleteClick}>삭제</R.DeleteButton>
        </R.ButtonWrapper>
      </R.Wrapper>
    </>
  );
}
