import React, { useState } from 'react';
import * as R from './ReviewDescription.style';

function ReviewDescription({ onDescriptionChange }) {
  const [description, setDescription] = useState('');

  const handleDescriptionChange = (event) => {
    const inputDescription = event.target.value;

    if (inputDescription.length <= 500) {
      setDescription(inputDescription);
      onDescriptionChange(inputDescription);
    }
  };
  return (
    <>
      <R.DescriptionWrapper>상세 설명</R.DescriptionWrapper>
      <R.DescriptionInput
        placeholder="후기를 자유롭게 작성해주세요.(최대 500자)"
        value={description}
        onChange={handleDescriptionChange}
        maxLength={500}
      />
    </>
  );
}

export default ReviewDescription;
